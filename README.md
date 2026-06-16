# Alitas Express Full-Stack Ordering Website

## Overview

Alitas Express is a full-stack restaurant ordering website designed for a wings delivery business. The platform transforms a traditional promotional flyer into a modern digital experience where customers can browse available wing flavors, place orders online, and view delivery information.

The application includes a responsive frontend for customers and a backend system that processes and stores order information.

---

## Features

### Customer Features

- View available wing flavors
- Browse restaurant information
- Place delivery orders online
- Mobile-friendly responsive design
- Quick contact and ordering options
- Attractive promotional landing page

### Backend Features

- Order submission processing
- Customer information storage
- Order management API
- Input validation
- Database integration
- RESTful API architecture

---

## Available Flavors

- Classic
- BBQ
- Buffalo
- Hot
- Lemon Pepper
- Mango Habanero
- Teriyaki

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL

### Tools

- Git
- GitHub
- REST APIs

---

## Project Structure

```text
Alitas-Express-Fullstack/
│
├── client/
│   ├── index.html
│   ├── styles/
│   ├── scripts/
│   └── images/
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
├── database/
│   └── schema.sql
│
├── README.md
├── package.json
└── .gitignore
```

---

## Database Design

The system stores customer order information, including:

- Customer Name
- Phone Number
- Delivery Address
- Selected Flavor
- Quantity
- Order Date
- Order Status

---

## API Endpoints

### Orders

| Method | Endpoint | Description |
|----------|----------|----------|
| GET | /api/orders | Retrieve all orders |
| GET | /api/orders/:id | Retrieve a specific order |
| POST | /api/orders | Create a new order |
| PUT | /api/orders/:id | Update an order |
| DELETE | /api/orders/:id | Remove an order |

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Alitas-Express-Fullstack.git
```

### Navigate to Project

```bash
cd Alitas-Express-Fullstack
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
npm start
```

### Run Development Server

```bash
npm run dev
```

---

## Future Enhancements

- Online payment integration
- Shopping cart functionality
- Customer accounts
- Order tracking
- SMS order notifications
- Admin dashboard
- Inventory management
- Analytics and reporting
