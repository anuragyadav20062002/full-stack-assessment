# User Details Management System

A simple full-stack application that lets users submit and manage their personal information. Built as part of a technical assessment.

## Live Demo

- Frontend: [https://full-stack-assessment-ae.netlify.app/](https://full-stack-assessment-ae.netlify.app/)
- Backend: [https://full-stack-assessment-0leg.onrender.com](https://full-stack-assessment-0leg.onrender.com)

## Tech Used

- Frontend: React.js
- Backend: Node.js + Express
- Database: MongoDB

## Getting Started

1. Clone the repo
2. Install dependencies:
```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

3. Set up environment variables:

Frontend (.env):
```
REACT_APP_API_URL=https://full-stack-assessment-0leg.onrender.com
```

Backend (.env):
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Run the app:
```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd frontend
npm start
```

## API Reference

Base URL: `https://full-stack-assessment-0leg.onrender.com`

### Available Endpoints

1. Get all users
```bash
GET /api/users
```
Returns a list of all users, sorted by creation date (newest first)

2. Create a new user
```bash
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "address": "123 Main St"
}
```
All fields (name, email, phone, address) are required.


## Note

This project was created as part of a technical assessment.

