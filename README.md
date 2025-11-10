Rental Property App

Overview

The Rental Property App is a full-stack web application that allows property owners to list their rental properties and tenants to explore, book, and manage rentals online.
It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and provides user authentication, property management, and secure API integration.

Features:
1. User authentication (Signup, Login, Logout)
2. Property listing and management for owners
3. Property browsing and booking for tenants
4. Booking management with start and end dates
5. Protected routes for authenticated users
6. RESTful APIs for backend operations
7. MongoDB integration for data storage

Technologies Used:
1. Frontend: React.js, Vite, TailwindCSS
2. Backend: Node.js, Express.js
3. Database: MongoDB
4. Authentication: JSON Web Tokens (JWT)
5. Version Control: Git and GitHub

Project Structure:
rental-property-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│
├── .gitignore
├── README.md

Installation and Setup:
Step 1: Clone the Repository
git clone https://github.com/aaryan010604/rental-property-app.git
cd rental-property-app

Step 2: Backend Setup
cd backend
npm install

Create a .env file inside the backend directory and add the following:

PORT=5000
MONGO_URI=mongodb://localhost:27017/rental_property_db
JWT_SECRET=your_secret_key


Start the backend server:

node server.js

Step 3: Frontend Setup
cd ../frontend
npm install
npm run dev


After running, open the local development URL shown in the terminal (e.g., http://localhost:5173/).

Future Enhancements:
1.Add online payment integration (Stripe or Razorpay)
2.Add map-based property search
3.Add image upload for property listings
4.Improve mobile responsiveness

Author:
Aaryan Jibhakate
Email: aaryan.jibhakate.btech2023@sitnagpur.siu.edu.in
GitHub: https://github.com/aaryan010604
