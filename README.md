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

### Endpoints

1. Create a new user
```bash
POST /api/users
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "address": "123 Main St"
}
```

2. Get all users
```bash
GET /api/users
```

3. Get a specific user
```bash
GET /api/users/:id
```

4. Update user
```bash
PUT /api/users/:id
{
  "name": "John Doe Updated",
  "email": "john.updated@example.com",
  "phone": "9876543210",
  "address": "456 New St"
}
```

5. Delete user
```bash
DELETE /api/users/:id
```

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
└── backend/
    ├── controllers/
    ├── models/
    └── routes/
```

## Testing the API

You can use tools like Postman or cURL to test the API. Here's a quick example using cURL:

```bash
# Create a user
curl -X POST https://full-stack-assessment-0leg.onrender.com/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890","address":"123 Main St"}'

# Get all users
curl https://full-stack-assessment-0leg.onrender.com/api/users
```

