// Grab the form and the inputs
const signinForm = document.getElementById('signin-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Listen for the user to click "Sign in"
signinForm.addEventListener('submit', function(event) {
  
  // 1. Stop the page from reloading immediately!
  event.preventDefault(); 
  
  // 2. Reset previous errors (assume it's valid until proven otherwise)
  let isValid = true;
  emailInput.classList.remove('is-invalid');
  passwordInput.classList.remove('is-invalid');

  // 3. Email Validation using a basic Regex pattern
  // This checks for the format: something @ something . something
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValue = emailInput.value.trim();
  
  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add('is-invalid'); // Turns the input box red
    isValid = false;
  }

  // 4. Password Validation (Must be at least 6 characters)
  const passwordValue = passwordInput.value.trim();
  
  if (passwordValue.length < 6) {
    passwordInput.classList.add('is-invalid'); // Turns the input box red
    isValid = false;
  }

  // 5. Success! What happens if everything is typed correctly?
  if (isValid) {
    // In a real app, this sends data to a server. 
    // For our portfolio, let's simulate a successful login and redirect them home!
    
    // Change button text to show it's working
    const submitBtn = signinForm.querySelector('button[type="submit"]');
    submitBtn.innerText = "Signing in...";
    
    // Wait 1 second (simulating network delay), then redirect to homepage
    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 1000);
  }
});