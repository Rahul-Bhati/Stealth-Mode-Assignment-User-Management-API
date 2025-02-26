﻿# User Management API

This is a simple User Management API built with Node.js, Express, MongoDB, and JWT-based authentication. The API supports user signup, login, and CRUD operations for managing users.

## Features

- User Authentication (JWT-Based)
- Signup API (POST /api/auth/signup)
- Login API (POST /api/auth/login)
- User CRUD APIs (Protected Routes - Require JWT Token)
  - Create User (POST /api/users)
  - Get All Users (GET /api/users)
  - Get Single User (GET /api/users/:id)
  - Update User (PUT /api/users/:id)
  - Delete User (DELETE /api/users/:id)

## Middleware & Security

- JWT middleware to protect routes
- Error handling using Express middleware
- Role-Based Access Control (Only admins can delete users)

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv

## Folder Structure

project-folder
│
├── src
│   ├── controllers
│   │   └── userController.ts
│   ├── middlewares
│   │   └── authMiddleware.ts
│   │   └── authorize.ts
│   ├── models
│   │   └── User.ts
│   ├── routes
│   │   └── userRoutes.ts
│   ├── utils
│   │   └── errorHandler.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── package.json
└── tsconfig.json


## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/user-management-api.git
   cd user-management-api

2. **Install dependencies:**
    ```bash
   npm install
   or
   yarn install

3. **Create a .env file in the root directory and add your environment variables:**
    ```bash
    JWT_SECRET=your_jwt_secret_key
    MONGODB_URI=your_mongodb_connection_string
    PORT=3000

4. **Run the application:**
    ```bash
    npm start
    or
    yarn start

# User Management API

## API Endpoints

### Signup

- **URL:** `/api/auth/signup`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
  }

### Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
- **Response:**
  ```json
  { 
    "accessToken": "your_jwt_token", 
    "user_id": "user_id" 
  }


### Create User (Protected)

- **URL:** `/api/users`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "Jane Doe", 
    "email": "jane@example.com", 
    "role": "user"
  }
- **Headers:**
  ```json
  { 
    "Authorization": "Bearer your_jwt_token"
  }

### Get All Users (Protected)

- **URL:** `/api/users`
- **Method:** `GET`
- **Body:**
  ```json
  {
    "Authorization": "Bearer your_jwt_token"
  }

### Get Single User (Protected)

- **URL:** `/api/users/:id`
- **Method:** `GET`
- **Body:**
  ```json
  {
    "Authorization": "Bearer your_jwt_token"
  }

### Update User (Protected)

- **URL:** `/api/users/:id`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "name": "Jane Doe", 
    "email": "jane@example.com", 
    "role": "admin"
  }
- **Headers:**
  ```json
  { 
    "Authorization": "Bearer your_jwt_token"
  }


### Delete User (Protected, Admin Only)

- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Body:**
  ```json
  {
    "Authorization": "Bearer your_jwt_token"
  }
