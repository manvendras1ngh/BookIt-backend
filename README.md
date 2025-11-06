# BookIt Backend (API)

This backend powers the BookIt web application. It provides experience data, promo code validation, and booking management. Built using Node.js and Express, with MongoDB as the database, the backend is deployed using Vercel serverless functions.

## Live Demo

Hosted API Base URL: https://book-it-backend-eight.vercel.app
Frontend (Live App): https://bookitabhi.netlify.app
Frontend Repository: https://github.com/manvendras1ngh/BookIt-frontend

---

## Features

1. REST API for managing experiences, promo codes, and bookings.
2. Fully structured MongoDB database with Mongoose schemas.
3. Promo code validation with expiry and active checks.
4. Booking creation with user details, promo usage, and linked experience.
5. CORS configuration for frontend communication.
6. Modular structure with Controllers, Models, Routes, and Utility helpers.
7. Serverless deployment on Vercel for high scalability.
8. Consistent JSON responses with async error handling.

---

## Tech Stack Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
- Deployment on Vercel

---

## Getting Started

Follow these steps to run the backend locally.

### 1. Clone the repository

```
git clone <backend-repo-url>
cd backend
```

### 2. Install dependencies

```
npm install
```

### 3. Create a `.env` file

Add the following environment variables:

```
MONGO_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
PORT=5000
```

### 4. Start the development server

```
nodemon index.js
```

The API will be available at:

```
http://localhost:5000
```

---

## Project Structure

```
  controllers/
  models/
  routes/
  utils/
  db/
```

---

## API Endpoints

### Experience Routes

```
GET /api/v1/experience
GET /api/v1/experience/:id
```

### Promo Routes

```
POST /api/v1/promo/validate
POST /api/v1/promo/add-default
```

### Booking Routes

```
POST /api/v1/booking
```

---

## Promo Code Workflow

Promo validation checks:

1. Promo exists.
2. Promo is active.
3. Promo has not expired.
4. Returns the discount amount when valid.

---

## Booking Workflow

A booking record stores:

- Experience reference (ObjectId)
- Full name
- Email
- Date
- Time
- Quantity
- Discount applied
- Promo code used
- Total price

Backend responds with the newly created `bookingId`.

---

## Connect

Website: https://dev.manavsingh.in  
LinkedIn: https://www.linkedin.com/in/manvendras1ngh/  
Email: 007singhmanvendra@gmail.com
