// 1. The Data Array (Simulating a database or API response)
const products = [
  {
    id: 1,
    title: "AMD Ryzen 5 5600F Desktop Processor",
    image: "images/ryzen.jpg",
    price: "₹12,499",
    rating: "⭐⭐⭐⭐⭐",
    delivery: "Get it by Tomorrow"
  },
  {
    id: 2,
    title: "Nvidia RTX 5050 Graphics Card - 8GB GDDR6",
    image: "images/5050.jfif",
    price: "₹28,999",
    rating: "⭐⭐⭐⭐½",
    delivery: "Free Delivery by Amazon"
  },
  {
    id: 3,
    title: "Corsair Vengeance 32GB (2x16GB) DDR5 RAM",
    image: "images/ram.jpg",
    price: "₹9,299",
    rating: "⭐⭐⭐⭐⭐",
    delivery: "Get it by Tomorrow"
  },
  {
    id: 4,
    title: "Crucial P3 1TB PCIe NVMe M.2 SSD",
    image: "images/ssd.jfif",
    price: "₹5,499",
    rating: "⭐⭐⭐⭐",
    delivery: "Free Delivery by Amazon"
  }
];

// 2. The Function to Render the Products
function renderProducts() {
  // Grab the empty container from our HTML
  const container = document.getElementById("dynamic-products-container");
  
  // FIX APPLIED HERE: If the container isn't on this page (like on the product page), stop the function!
  if (!container) return; 
  
  // Clear it out just in case
  container.innerHTML = "";

  // Loop through each product in our array
  products.forEach(product => {
    // Create the HTML structure for a single product card
    const productHTML = `
      <div class="col-lg-3 col-md-6">
        <div class="card h-100 border-0 shadow-sm product-card p-3">
          
          <a href="product.html">
            <img src="${product.image}" class="card-img-top mb-3" alt="${product.title}" style="object-fit: contain; height: 150px;">
          </a>
          
          <div class="card-body p-0 d-flex flex-column">
            
            <a href="product.html" class="text-decoration-none product-title-link">
              <h6 class="card-title text-truncate" style="font-size: 0.9rem;">${product.title}</h6>
            </a>
            
            <div class="mb-1" style="font-size: 0.8rem;">${product.rating}</div>
            <div class="fs-4 fw-bold mb-2">${product.price}</div>
            <div class="text-muted mb-3" style="font-size: 0.75rem;">${product.delivery}</div>
            
            <button class="btn btn-warning w-100 mt-auto shadow-sm rounded-pill add-to-cart-btn" data-id="${product.id}">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    
    // Inject the HTML into the container
    container.innerHTML += productHTML;
  });
}

// 3. Run the function when the page loads
renderProducts();

// ==========================================
// PHASE 2: UPGRADED SHOPPING CART LOGIC
// ==========================================

// 1. Get the cart array from Local Storage (or start empty)
let cart = JSON.parse(localStorage.getItem('amazonCart')) || [];

// 2. Function to update the yellow number in the navbar
function updateCartUI() {
  const cartBadge = document.getElementById('cart-count');
  if (cartBadge) {
    // Calculate total quantity of all items
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.innerText = totalItems;
  }
}

// 3. Listen for clicks on "Add to Cart" buttons
// FIX APPLIED HERE: We check if the container exists before adding the event listener
const productContainer = document.getElementById('dynamic-products-container');

if (productContainer) {
  productContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
      
      // Find which product was clicked using its data-id
      const productId = parseInt(event.target.getAttribute('data-id'));
      const productToAdd = products.find(p => p.id === productId);
      
      // Check if this item is already in the cart
      const existingItem = cart.find(item => item.id === productId);
      
      if (existingItem) {
        existingItem.quantity += 1; // Just increase quantity if it's there
      } else {
        // Add the new product object with a quantity of 1
        cart.push({ ...productToAdd, quantity: 1 });
      }
      
      // Save the updated array back to Local Storage
      localStorage.setItem('amazonCart', JSON.stringify(cart));
      updateCartUI();
      
      // Visual Feedback (Turns button green)
      const btn = event.target;
      const originalText = btn.innerText;
      btn.innerText = "Added!";
      btn.classList.replace('btn-warning', 'btn-success');
      
      setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.replace('btn-success', 'btn-warning');
      }, 1500);
    }
  });
}

// Run once on load
updateCartUI();