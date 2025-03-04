# Task Manager App

## Overview
This is a Task Manager application that allows users to sign up, log in, and manage their tasks. Users can create, edit, delete, and mark tasks as completed. The application is built with a React frontend and a Node.js backend.

## Technologies Used
- **Frontend**: React, React Router, Context API, Axios, Material-UI (or Tailwind CSS)
- **Backend**: Node.js, Express.js, MongoDB (with Mongoose), JWT for authentication, bcrypt for password hashing
- **Database**: MongoDB

## Features
- User authentication (signup and login)
- Dashboard to manage tasks
- Create, edit, delete, and mark tasks as completed
- Responsive UI

## Project Structure
```
task-manager-app
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── .env
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB (or a MongoDB Atlas account)

### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```
   node server.js
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the `frontend` directory and add your API base URL:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start the frontend application:
   ```
   npm start
   ```

## Usage
- Visit the application in your browser (usually at `http://localhost:3000`).
- Sign up for a new account or log in with an existing account.
- Use the dashboard to manage your tasks.

## License
This project is licensed under the MIT License.