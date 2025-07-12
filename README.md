Full Stack React + Node API Assignment

Objective
A simple, full-stack application that demonstrates:
  React frontend with form handling, routing, and Bootstrap styling
  Node.js + Express backend with in-memory API (POST & GET)
  Asynchronous data fetching
  Random dog image for each user using Dog CEO API
  Clean, responsive, modern UI

Project Structure
FullStack-React-NodeAPI Assignment/
  client/ 
  server/ 
  README.md

Tech Stack
  Frontend: React, Bootstrap, Axios, React Router
  Backend: Node.js, Express.js, CORS, Nodemon (for dev)
  API: Dog CEO API

# Setup Instructions
1) Clone the repository
git clone https://github.com/LOGAN8MD/fullstack-react-node-api.git
cd react-node-api-assignment

2) Setup & run the backend server
cd server
npm install # Install dependencies
npm run dev # Start server with nodemon for auto-reload
Backend runs at: http://localhost:8888

3) Setup & run the frontend React app
Open a new terminal tab/window:
cd client
npm install # Install dependencies
npm start # Run React app
Frontend runs at: http://localhost:3000


# Features

Frontend
User Form Page
- Input: First Name, Last Name, DOB
- POST to /api/user to save user data in memory
- Redirect to Display page on submit
Display Page
- GET /api/user to fetch all users
- Fetch unique random dog image for each user
- Calculate & display user age from DOB
- Show details in Bootstrap cards
- Go Back button to return to the form
Extra
- Loading states
- Basic error handling
- Form validation
- Responsive Bootstrap layout

Backend
- Express server with CORS enabled
- Stores submitted user data in memory (simple array)
- Adds a unique ID to each user based on array length
- `POST /api/user` saves user data to in-memory array
- `GET /api/user` returns all saved users
- No database used — simple and easy for testing/demo
- Nodemon for live reload during development


# Screenshots

User Form Page
(./screenshots/form-page.png)

User Form Page with Alert
(./screenshots/alert-on-form.png)

Display Page with User Data & Dog Image
(./screenshots/display-page.png)