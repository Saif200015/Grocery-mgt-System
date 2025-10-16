# 🛒 MERN E-Commerce Project

## 📖 Project Overview
This project is a **MERN Stack E-Commerce Application** built using **Vite + React**, **Express.js**, **Node.js**, **MongoDB Atlas**, and **Tailwind CSS**.  
It includes **two main modules** — one for **Users** and one for **Sellers** — with functionalities for authentication, product management, cart handling, order management, and secure online payments using **Stripe**.

---

## 🚀 Tech Stack

### 🌐 Frontend
- **Vite + React.js** – for building fast and modern UI  
- **Tailwind CSS** – for sleek and responsive styling  

### ⚙️ Backend
- **Node.js + Express.js** – for creating RESTful APIs  
- **Nodemon** – for automatic server restarts during development  

### 🗄️ Database & File Storage
- **MongoDB Atlas** – for storing user, product, and order data  
- **Cloudinary** – for image storage and management  
- **Multer** – for file upload handling  

### 💳 Payment Integration
- **Stripe** – for secure online payment processing  

---

## 👥 Modules

### 👤 User Module
- Users can **sign up** or **log in**.  
- After login, users can **add products to their cart** and **purchase** them.  
- Two payment options available:  
  - 💰 **Cash on Delivery (COD)**  
  - 💳 **Online Payment via Stripe**  
- Users can view all their orders on the **My Orders** page.  
- Users can **search for products**, view all available items, and access a **Contact Us** section.

### 🛍️ Seller Module
- Sellers can log in (currently static credentials):  
Email: admin@gmail.com
- Sellers can **add new products** for buyers.  
- Sellers can **view all products** in a product list.  
- Out-of-stock products can be marked as unavailable using an **InStock toggle**.  
- Sellers can also **view all customer orders** in the Orders section.

