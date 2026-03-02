# 📦 RetroCart - Advanced E-Commerce Simulation

A high-fidelity, responsive e-commerce platform built with **Vanilla JavaScript**, **Bootstrap 5**, and **HTML/CSS**. This project demonstrates the ability to build complex multi-page applications with persistent state management and professional-grade security optimizations.

## 🚀 Live Demo
(https://ashutoshsingh93541.github.io/Amazon-Clone_HTML-CSS-Javascript/)

---

## ✨ Key Features

### 1. Global State Management & Cart Logic
* **LocalStorage Integration**: Cart data is persisted across the browser using JSON stringification, ensuring users don't lose items during navigation.
* **Dynamic Item Rendering**: Products are injected via JavaScript templates rather than hardcoded, allowing for scalable data management.
* **Real-time Updates**: The navbar cart badge and subtotal prices update instantly upon adding or removing items.

### 2. Security & Compliance (Anti-Phishing)
* **Safety Banners**: Implemented high-visibility global disclaimers to clearly mark the site as a portfolio simulation.
* **Neutralized Branding**: Rebranded from a standard clone to "RetroCart" to adhere to web safety standards and avoid social engineering triggers.
* **Validated Authentication**: Custom simulated login forms featuring **Regex validation** for email formats and password strength.

### 3. SEO & Discoverability
* **Sitemap & Robots.txt**: Includes a custom `sitemap.xml` and `robots.txt` to guide search engine crawlers and optimize indexing.
* **Semantic HTML**: Fully optimized with proper meta tags, Open Graph properties, and ARIA labels for accessibility and search rankings.

---

## 🛠️ Technical Stack

* **Front-End**: HTML5, CSS3, Bootstrap 5.
* **Logic**: Vanilla JavaScript (ES6+).
* **Assets**: Optimized `.png` imagery for high-speed loading and cross-browser compatibility.
* **Tools**: GitHub Pages for hosting, Google Search Console for security monitoring.

---

## 📂 Project Structure

```text
├── images/               # Case-sensitive .png asset folder
├── index.html            # Homepage with Dynamic Product Grid
├── product.html          # Individual Product Detail Page (PDP)
├── cart.html             # Shopping Cart & Checkout UI
├── signin.html           # Validated Simulation Login
├── style.css             # Custom theme & responsive overrides
├── script.js             # Core App logic & state management
├── cart.js               # Cart rendering & price calculation
├── robots.txt            # Search engine crawl instructions
└── sitemap.xml           # XML Sitemap for indexing
