📝 Blog Platform – Full Stack Web Application
A full-stack Blog Publishing Platform where users can create, read, update, and delete (CRUD) blog posts with secure authentication, bookmarking, comments, and profile management. Built with React, Node.js, Express, MongoDB and modern tooling.

⚙️ Tech Stack
Frontend (Web)
React 19 + Vite

Redux Toolkit (state management)

React Router DOM v7 (routing)

Tailwind CSS (styling)

CKEditor (rich text editor)

Axios (API calls)

Backend
Node.js + Express

MongoDB + Mongoose

JWT Authentication (JSON Web Tokens)

BcryptJS (password hashing)

Nodemailer (password reset functionality)

🚀 Features
🔐 Authentication
User registration

Login with JWT authentication

Profile details with picture, bio

Forgot password & reset using OTP

📰 Blog Posts
Create blog (title, content via CKEditor, tags, optional image)

Update/Delete only your own blogs

View all blogs in feed (with pagination & search support)

View individual blog details

⭐ User Features
Bookmark / Unbookmark blog posts

View all bookmarked blogs

View all blogs authored by user

Comment on blog posts (add/delete own comments)

📂 Project Structure
text
📦 blog-platform
 ┣ 📂 backend
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 middlewares
 ┃ ┣ 📜 index.js
 ┃ ┗ 📜 package.json
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 redux
 ┃ ┃ ┗ 📜 App.jsx
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 vite.config.js
 ┗ 📜 README.md
🛠️ Setup Instructions
1️⃣ Backend Setup
bash
cd backend
npm install
npm run dev
Create a .env file in backend/ with:

text
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
API runs at: http://localhost:5000

2️⃣ Frontend Setup
bash
cd frontend
npm install
npm run dev
Frontend runs at: http://localhost:5173

🔑 API Endpoints
Auth Routes (/api/auth)
Method	Endpoint	Description
POST	/register	Register new user
POST	/login	Login user & get JWT
GET	/getAllUser	Get all users (protected)
GET	/me	Get logged-in user profile
POST	/forgot-password	Request OTP for reset
POST	/verify-otp	Verify OTP
POST	/reset-password	Reset password
Blog Routes (/api/blog)
Method	Endpoint	Description
POST	/createPost	Create blog post
GET	/allPost	Get all blog posts
GET	/post/:id	Get blog by ID
PUT	/updatePost/:id	Update blog (author only)
DELETE	/deletePost/:id	Delete blog (author only)
POST	/bookmarkPost/:id	Bookmark/Unbookmark post
GET	/bookmarks	Get all bookmarked blogs
GET	/my-posts	Get all posts by user
POST	/post/:id/comment	Add comment to post
DELETE	/post/:id/comment/:commentId	Delete comment
🤖 AI Tools Usage
During development, ChatGPT (GPT-5) was used for:

Generating boilerplate code for Express routes & Redux slices.

Debugging React state for bookmarks & comments.

CKEditor integration with React + Tailwind.

Writing reusable utilities & error handling.

UI component styling (cards, buttons, modals).

📸 Demo
Screenshots / Video demo → [add link]

Live Demo (optional) → [deployment link]

🏆 Evaluation Criteria Mapping
API design & architecture → RESTful routes, modular controllers

AI usage → Documented above, integrated in workflow

Feature completeness → CRUD, auth, bookmarks, comments, profile

Code readability → Clean modular structure

Bonus features → CKEditor, password reset, pagination, bookmarks

👨‍💻 Author
Your Name
Software Engineering Intern Candidate – Mitt Arv