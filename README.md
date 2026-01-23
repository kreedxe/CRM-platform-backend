# CRM Platform - Backend

This repository contains the backend implementation for the **CRM Platform**. It is built using **Node.js**, **Express**, **TypeScript**, and **Prisma** with **PostgreSQL** as the database.

---

## Features

- **User Management**: Create, update, delete, and retrieve user information.
- **Authentication**: Secure login, JWT-based authentication, and token refresh.
- **Role-Based Access Control**: Authorization based on user roles (Admin, Staff, User).
- **Validation**: Request payload validation using Yup.
- **Error Handling**: Centralized error-handling middleware.
- **Database Integration**: Prisma ORM with PostgreSQL.
- **Dependency Injection**: Inversify for modular and testable code.
- **Environment Configuration**: `.env` file support for environment variables.
- **Scalable Architecture**: Clean and modular folder structure.

---

## Tech Stack

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building APIs.
- **TypeScript**: Strongly typed JavaScript for better maintainability.
- **Prisma**: ORM for database management.
- **PostgreSQL**: Relational database.
- **Inversify**: Dependency injection for modular architecture.
- **Yup**: Schema validation for request payloads.
- **JWT**: Secure authentication and authorization.

---

## API Endpoints

### Authentication

- `POST /api/auth/login`: User login.
- `POST /api/auth/register`: User registration.
- `POST /api/auth/refresh-token`: Refresh JWT token.
- `POST /api/auth/logout`: User logout.

### Users

- `GET /api/users/me`: Get current logged in user
- `GET /api/users/getbyemail`: Get user by Email.
- `GET /api/users/:id`: Get user by ID.
- `PUT /api/users/:id`: Update user by ID.
- `DELETE /api/users/:id`: Delete user by ID.

### Health Check

- `GET /api/health/check`: Check server health.

---

## Environment Variables

| Variable       | Description                    | Example                     |
| -------------- | ------------------------------ | --------------------------- |
| `PORT`         | Server port                    | `9000`                      |
| `NODE_ENV`     | Environment (development/test) | `development`               |
| `DATABASE_URL` | PostgreSQL connection string   | `postgres://user:pass@host` |
| `JWT_SECRET`   | Secret key for JWT             | `your_jwt_secret`           |
| `JWT_AUDIENCE` | JWT audience                   | `your_audience`             |
| `JWT_ISSUER`   | JWT issuer                     | `your_issuer`               |

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run start`: Start the production server.
- `npm run prisma:migrate`: Run prisma migrations.
- `npm run prisma:generate`: Generate Prisma client.

---
