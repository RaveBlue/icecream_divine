# icecream_divine

🍦 Divine Ice Cream - Full-Stack E-Commerce Platform
A modern, full-stack e-commerce web application for selling protein ice cream products. Built with React, Node.js, Express, and PostgreSQL, featuring secure user authentication, shopping cart functionality, and order management.

Live Demo:
#Screenshot

📋 Table of Contents
Features
Tech Stack
Getting Started
Deployment
Challenges & Solutions
Future Enhancements

✨ Features
User Authentication: Secure signup/login system with JWT tokens and bcrypt password hashing
Product Catalog: Browse 7 different protein ice cream flavors with detailed nutritional information
Shopping Cart: Add/remove items, adjust quantities, and view real-time totals
Checkout System: Complete order form with shipping and payment details
Order History: View past orders with full details and order status
Responsive Design: Mobile-friendly interface that works on all devices
Cloud Database: PostgreSQL database for persistent data storage

🛠 Tech Stack
Frontend

React - UI library for building interactive components
React Router - Client-side routing and navigation
Vite - Fast build tool and development server
CSS3 - Custom styling and responsive design

Backend

Node.js - JavaScript runtime environment
Express.js - Web application framework
PostgreSQL - Relational database
JWT - Secure user authentication tokens
Bcrypt - Password hashing and encryption
CORS - Cross-origin resource sharing

Deployment

Vercel - Frontend hosting
Render - Backend API and PostgreSQL database hosting

🚀 Getting Started
Prerequisites

Node.js (v14 or higher)
PostgreSQL (v15 or higher)
npm or yarn

Installation

1. Clone the repository
   git clone https://github.com/RaveBlue/divine-icecream.git
   cd divine-icecream
2. Set up the backend
   cd backend
   npm install

```

3. **Create `.env` file in backend folder**
```

DB_HOST=localhost
DB_PORT=5432
DB_NAME=icecream_db
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
PORT=5000

4. Set up the database
   createdb icecream_db
   psql -d icecream_db -f schema.sql

5. Start the backend server
   npm run dev

6. Set up the frontend(in a new terminal)
   cd ../
   npm install
   npm run dev

7.Open your browser
Navigate to http://localhost:5173

🌐 Deployment
Backend (Render)

Create a PostgreSQL database on Render
Run schema.sql to set up tables
Create a Web Service connected to your GitHub repo
Set root directory to backend
Add environment variables (DATABASE_URL, JWT_SECRET, NODE_ENV)
Deploy!

Frontend (Vercel)

Import your GitHub repository to Vercel
Set framework preset to Vite
Add environment variable: VITE_API_URL pointing to your Render backend
Deploy!

💡 Challenges & Solutions
Challenge 1: CORS Configuration
Problem: Frontend and backend on different domains caused CORS errors preventing API calls.
Solution: Implemented dynamic CORS configuration in Express to allow requests from both localhost (development) and Vercel domain (production)

app.use(cors({
origin: function(origin, callback) {
if (!origin || origin.startsWith('http://localhost:') || origin.includes('.vercel.app')) {
return callback(null, true);
}
callback(new Error('Not allowed by CORS'));
},
credentials: true,
}));

Challenge 2: Environment Variables in Vite
Problem: API URL wasn't updating in production even after setting environment variables.
Solution: Learned that Vite environment variables are baked in at build time, not runtime. Required full rebuild with cleared cache whenever changing VITE_API_URL.

Challenge 3: Case-Sensitive File Paths
Problem: Images worked locally (macOS) but failed in production (Linux) due to case sensitivity.
Solution: Renamed image folder from Images to images and ensured all imports matched exact casing. Pushed changes to GitHub and forced clean build on Vercel.

Challenge 4: Database Connection in Production
Problem: Backend couldn't connect to PostgreSQL on Render initially.
Solution: Updated database configuration to use connectionString with SSL for production:
const pool = new Pool({
connectionString: process.env.DATABASE_URL,
ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

Challenge 5: Image Organization
Problem: Images scattered across multiple folders caused build errors and broken imports.
Solution: Consolidated all images into single src/images/ directory and updated all import paths consistently throughout the application.

🔮 Future Enhancements

Add payment processing integration (Stripe)
Implement product reviews and ratings system
Add admin dashboard for managing products and orders
Email confirmation for orders
Product search and filtering functionality
Wishlist/favorites feature
Discount codes and promotions
Password reset functionality
User profile page with order history export

📸 Screenshots
Home Page

Products Page

Shopping Cart

Order History

👤 Author
Your Name
GitHub: @RaveBlue
LinkedIn: Your LinkedIn

🙏 Acknowledgments

Ice cream images designed by me using Adobe Illustrator
Inspired by modern e-commerce platforms
Built as a portfolio project to demonstrate full-stack development skills

Built with ❤️ and React
