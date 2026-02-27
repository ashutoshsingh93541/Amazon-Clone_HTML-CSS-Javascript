// Grab the elements from the cart page
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalItemsText = document.getElementById('cart-total-items');
const cartTotalPriceText = document.getElementById('cart-total-price');

// Grab the elements from the checkout box on the right
const checkoutTotalItemsText = document.getElementById('checkout-total-items');
const checkoutTotalPriceText = document.getElementById('checkout-total-price');

// Retrieve the cart array from Local Storage
let cart = JSON.parse(localStorage.getItem('amazonCart')) || [];

function renderCart() {
  cartItemsContainer.innerHTML = '';
  
  let subtotal = 0;
  let totalItems = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<h4 class="text-muted mt-4 mb-5">Your Amazon Cart is empty.</h4>';
    cartTotalItemsText.innerText = '0';
    cartTotalPriceText.innerText = '₹0.00';
    if(checkoutTotalItemsText) checkoutTotalItemsText.innerText = '0';
    if(checkoutTotalPriceText) checkoutTotalPriceText.innerText = '₹0.00';
    return;
  }

  cart.forEach(item => {
    const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ''));
    subtotal += numericPrice * item.quantity;
    totalItems += item.quantity;

    const itemHTML = `
      <div class="row mb-4 cart-item">
        <div class="col-3 col-md-2">
          <img src="${item.image}" class="img-fluid rounded" style="max-height: 100px; object-fit: contain;" alt="Product">
        </div>
        
        <div class="col-9 col-md-8">
          <h5 class="text-truncate" style="font-size: 1.1rem; color: #007185;">${item.title}</h5>
          <div class="text-success mb-1" style="font-size: 0.8rem;">In stock</div>
          <div class="text-muted mb-2" style="font-size: 0.8rem;">${item.delivery}</div>
          
          <div class="d-flex align-items-center gap-3 mt-2" style="font-size: 0.85rem;">
            <span class="fw-bold border px-2 py-1 rounded bg-light">Qty: ${item.quantity}</span>
            <div class="vr"></div>
            <a href="#" class="text-decoration-none cart-action-link" onclick="removeItem(${item.id})">Delete</a>
          </div>
        </div>

        <div class="col-12 col-md-2 text-md-end mt-3 mt-md-0">
          <span class="fw-bold fs-5">${item.price}</span>
        </div>
      </div>
    `;
    
    cartItemsContainer.innerHTML += itemHTML;
  });

  const formattedSubtotal = '₹' + subtotal.toLocaleString('en-IN') + '.00';

  // Update Left Side
  cartTotalItemsText.innerText = totalItems;
  cartTotalPriceText.innerText = formattedSubtotal;

  // ADD THESE TWO LINES: Update the navbar yellow badge!
  const cartBadge = document.getElementById('cart-count');
  if (cartBadge) cartBadge.innerText = totalItems;
  
  // Update Right Side Checkout Box
  if(checkoutTotalItemsText) checkoutTotalItemsText.innerText = totalItems;
  if(checkoutTotalPriceText) checkoutTotalPriceText.innerText = formattedSubtotal;
}

window.removeItem = function(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('amazonCart', JSON.stringify(cart));
  renderCart();
};

renderCart();