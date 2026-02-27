# Amazon India Clone – Front-End Portfolio Project

A fully responsive, multi-page e-commerce web application inspired by Amazon India.  
Built using **Vanilla JavaScript**, **Bootstrap 5**, and **HTML/CSS**, this project demonstrates advanced front-end concepts such as dynamic rendering, state management with Local Storage, and form validation.

---

## 🚀 Live Demo  
👉 (https://ashutoshsingh93541.github.io/Amazon-Clone_HTML-CSS-Javascript/)

(Replace with your actual GitHub Pages link)

---

## ✨ Key Features

### 1. Dynamic Homepage
- **JavaScript Data Rendering:** Products are generated dynamically from JavaScript objects (no hardcoded HTML).
- **Responsive Navigation:** Custom two-tier navbar with a mobile-friendly full-width search bar.
- **Hero Carousel:** Bootstrap fade-effect banner slider.
- **Today's Deals Section:** Horizontally scrollable product row with custom scrollbar styling.

---

### 2. Functional Shopping Cart
- **Persistent State:** Uses `localStorage` to save cart data even after refresh or browser close.
- **Dynamic Calculations:** Auto-calculates subtotal and total item count.
- **CRUD Operations:**  
  - Add items from homepage or product page  
  - Remove items directly from cart  
  - Update quantity automatically

---

### 3. Product Details Page (PDP)
- **Dedicated Layout:**  
  - High-resolution product image  
  - Product description & specifications  
  - Buy Box section  
- **Global Cart Integration:**  
  "Add to Cart" updates the same cart state across pages.

---

### 4. Secure Authentication UI
- **Regex Validation:** Email is validated using Regular Expressions.
- **Password Rule:** Minimum 6 characters required.
- **Bootstrap Feedback:** Uses `is-invalid` states instead of browser tooltips.
- **User Flow Simulation:** Successful login simulates server delay before redirect.

---

## 🛠️ Built With
- **HTML5 & CSS3** – Custom layouts and Amazon-inspired styling  
- **Bootstrap 5** – Grid system, Flex utilities, UI components  
- **Vanilla JavaScript** – All logic without external JS libraries  
- **Bootstrap Icons** – Scalable vector icons  

---

## 📂 Project Structure

```
├── images/               # Product and banner assets
├── index.html            # Homepage
├── product.html          # Product Details Page
├── cart.html             # Shopping Cart Page
├── signin.html           # Login Page
├── style.css             # Main stylesheet
├── script.js             # Homepage & Cart logic
├── cart.js               # Cart rendering & calculations
└── auth.js               # Authentication & form validation
```

---

## 🧠 Logic & Rules

### Shopping Cart Logic
- **Storage Key:** `amazonCart` in localStorage  
- **Format:** Stringified JSON array  
- **Quantity Handling:**  
  - If product already exists → quantity increases  
  - No duplicate items created  

---

### Form Validation Rules
- **Email Regex:**  
  ```
  ^[^\s@]+@[^\s@]+\.[^\s@]+$
  ```
- **Password:** Minimum 6 characters  
- **Feedback:** Uses `novalidate` with custom Bootstrap error messages  

---

## 👤 Author

**Ashutosh Singh (Retroashu)**  
Front-End Developer & Content Creator  

🔗 Portfolio: https://your-portfolio-link  
📸 Instagram: https://instagram.com/retroashu  

---

## ⭐ How to Run Locally
1. Download or clone the repository  
2. Open `index.html` in your browser  
3. No server required (pure front-end project)

---

## 📌 Note
This project is built for **educational and portfolio purposes only** and is not affiliated with Amazon in any way.
