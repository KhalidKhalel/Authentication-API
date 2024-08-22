# Authentication API
`Programmer:` Zachary Taylor (Computer Science Student at Middle Tennessee State University)
## Overview

Welcome to the Authentication API project, built with cutting-edge technologies to provide a secure and efficient user authentication system. This API is designed to handle user registration, login, email verification, password management, and token management. It leverages modern tools and libraries to ensure a robust and scalable solution.

## Features

- **User Registration**: Create new user accounts with email verification.
- **Email Verification**: Verify user email addresses to ensure account authenticity.
- **Forgot Password**: Send password reset emails to users.
- **Reset Password**: Securely update passwords for users.
- **Current User**: Retrieve details of the currently logged-in user.
- **Login**: Authenticate users and generate access tokens.
- **Access Token**: Issue tokens for user authentication.
- **Refresh Tokens**: Generate new access tokens using refresh tokens for extended sessions.

## Technology Stack

- **TypeScript**: Provides static type checking for robust code quality.
- **Express@5**: A popular web server framework for building APIs.
- **Typegoose**: A TypeScript wrapper for Mongoose, making it easier to define and manage schemas.
- **argon2**: A secure hashing algorithm for password storage.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **jsonwebtoken**: Used for signing and verifying JSON Web Tokens (JWT).
- **Nodemailer**: Handles sending emails, including password reset links and verification emails.
- **Pino**: Fast and low-overhead logging library.
- **config**: Manages configuration settings and environment variables.

## Prerequisites

To follow along with this project, you will need:

- **Postman**: For testing API endpoints.
- **Node.js**: JavaScript runtime for running the server.
- **MongoDB**: NoSQL database for storing user data.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/authentication-api.git
