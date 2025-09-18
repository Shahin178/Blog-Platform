<div align="center">

# 📝 Blog Platform

## Full Stack Web Application

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)

</div>

A modern full-stack Blog Publishing Platform where users can create, read, update, and delete (CRUD) blog posts with secure authentication, bookmarking, comments, and profile management. Built with cutting-edge technologies and best practices.

---

## ⚙ Tech Stack

### 🎨 Frontend

- _React 19_ + _Vite_ - Modern React with lightning-fast build tooling
- _Redux Toolkit_ - Predictable state management
- _React Router DOM v7_ - Declarative routing for React
- _Tailwind CSS_ - Utility-first CSS framework for rapid UI development
- _CKEditor_ - Rich text editor for content creation
- _Axios_ - Promise-based HTTP client

### 🛠 Backend

- _Node.js_ + _Express_ - Fast, unopinionated web framework
- _MongoDB_ + _Mongoose_ - NoSQL database with elegant object modeling
- _JWT Authentication_ - Secure token-based authentication
- _BcryptJS_ - Password hashing for security
- _Nodemailer_ - Email functionality for password reset

---

## 🚀 Features

### 🔐 Authentication & Security

- ✅ _User Registration_ - Create new accounts with validation
- ✅ _Secure Login_ - JWT-based authentication system
- ✅ _Profile Management_ - Personal details with picture and bio
- ✅ _Password Recovery_ - Forgot password & reset using OTP

### 📰 Blog Management

- ✅ _Create Blogs_ - Rich text editor with CKEditor, tags, and image uploads
- ✅ _Edit & Delete_ - Full CRUD operations (own posts only)
- ✅ _Blog Feed_ - Paginated view with search functionality
- ✅ _Detailed View_ - Individual blog post pages

### ⭐ User Experience

- ✅ _Bookmarking_ - Save and organize favorite posts
- ✅ _Personal Library_ - View all bookmarked blogs
- ✅ _Author Dashboard_ - Manage all your published posts
- ✅ _Comments System_ - Engage with posts through comments

---

## 📂 Project Structure

📦 blog-platform
├── 📂 backend
│ ├── 📂 controllers # Route handlers and business logic
│ ├── 📂 models # Database schemas and models
│ ├── 📂 routes # API endpoint definitions
│ ├── 📂 middlewares # Authentication and validation
│ ├── 📂 utils # Helper functions and utilities
│ ├── 📜 .env # Environment variables
│ ├── 📜 db.js # Database connection setup
│ ├── 📜 index.js # Server entry point
│ └── 📜 package.json # Backend dependencies
├── 📂 frontend
│ ├── 📂 src
│ │ ├── 📂 components # Reusable UI components
│ │ ├── 📂 pages # Page-level components
│ │ ├── 📂 redux # State management
│ │ ├── 📜 api.jsx # API configuration
│ │ └── 📜 App.jsx # Main application component
│ ├── 📜 package.json # Frontend dependencies
│ └── 📜 vite.config.js # Vite configuration
└── 📜 README.md # Project documentation

---

## 🛠 Setup Instructions

### 1️⃣ Backend Setup

bash

# Navigate to backend directory

cd backend

# Install dependencies

npm install

# Start development server

npm run dev

_Environment Configuration:_

Create a .env file in the backend/ directory with the following variables:

env
MONGO_URI=mongodb+srv://banoshahin89_db_user:uylcHyMk7PzCzpQe@cluster0.by5mtjj.mongodb.net/
PORT=8080
JWT_SECRET=shahinnn
EMAIL_USER=banoshahin981@gmail.com
EMAIL_PASS=bhpb ggnt lpmm brdc

### 2️⃣ Frontend Setup

bash

# Navigate to frontend directory

cd frontend

# Install dependencies

npm install

# Start development server

npm run dev

_Access the application:_

- 🌐 Frontend: [http://localhost:5173](http://localhost:5173)
- 🔧 Backend API: [http://localhost:8080](http://localhost:8080)

---

## 🔑 API Endpoints

### 🔐 Authentication Routes (/api/auth)

| Method | Endpoint         | Description                      |
| ------ | ---------------- | -------------------------------- |
| POST   | /register        | Register new user account        |
| POST   | /login           | Login user & get JWT token       |
| GET    | /getAllUser      | Get all users (protected)        |
| GET    | /me              | Get logged-in user profile       |
| POST   | /forgot-password | Request OTP for password reset   |
| POST   | /verify-otp      | Verify OTP code                  |
| POST   | /reset-password  | Reset password with verified OTP |

### 📝 Blog Routes (/api/blog)

| Method | Endpoint                     | Description                    |
| ------ | ---------------------------- | ------------------------------ |
| POST   | /createPost                  | Create new blog post           |
| GET    | /allPost                     | Get all blog posts (paginated) |
| GET    | /post/:id                    | Get specific blog by ID        |
| PUT    | /updatePost/:id              | Update blog (author only)      |
| DELETE | /deletePost/:id              | Delete blog (author only)      |
| POST   | /bookmarkPost/:id            | Bookmark/Unbookmark post       |
| GET    | /bookmarks                   | Get all bookmarked blogs       |
| GET    | /my-posts                    | Get all posts by current user  |
| POST   | /post/:id/comment            | Add comment to blog post       |
| DELETE | /post/:id/comment/:commentId | Delete comment (author only)   |

---

## 🤖 AI Tools Usage

During development, _ChatGPT (GPT-5)_ was leveraged for:

- 🔧 _Code Generation_ - Boilerplate code for Express routes & Redux slices
- 🐛 _Debugging_ - React state management for bookmarks & comments
- 🎨 _Integration_ - CKEditor integration with React + Tailwind
- 🛠 _Utilities_ - Writing reusable utilities & error handling
- 💅 _Styling_ - UI component styling (cards, buttons, modals)

---

## 📸 Demo

### 🖼 Screenshots

> Screenshots and video demo → [Coming Soon]

### 🌐 Live Demo

> Live deployment → [Coming Soon]

---

## 🏆 Evaluation Criteria Mapping

| Criteria                    | Implementation                                  |
| --------------------------- | ----------------------------------------------- |
| _API Design & Architecture_ | RESTful routes, modular controllers             |
| _AI Usage_                  | Documented above, integrated in workflow        |
| _Feature Completeness_      | CRUD, auth, bookmarks, comments, profile        |
| _Code Readability_          | Clean modular structure                         |
| _Bonus Features_            | CKEditor, password reset, pagination, bookmarks |

---

<div align="center">

## 👨‍💻 Author

_Shahin Bano_
Software Engineering Intern Candidate – Mitt Arv

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/shahin-bano-8966ba201/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/Shahin178)

---

⭐ _Star this repository if you found it helpful!_

</div>
