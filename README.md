
`Programmer:` Zachary Taylor (Computer Science student at Middle Tennessee State University)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        code {
            background: #f4f4f4;
            border-radius: 4px;
            padding: 2px 6px;
            font-size: 0.9em;
        }
        pre {
            background: #f4f4f4;
            border-radius: 4px;
            padding: 10px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>Authentication API</h1>

    <h2>Overview</h2>
    <p>Welcome to the Authentication API project, built with cutting-edge technologies to provide a secure and efficient user authentication system. This API is designed to handle user registration, login, email verification, password management, and token management. It leverages modern tools and libraries to ensure a robust and scalable solution.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>User Registration</strong>: Create new user accounts with email verification.</li>
        <li><strong>Email Verification</strong>: Verify user email addresses to ensure account authenticity.</li>
        <li><strong>Forgot Password</strong>: Send password reset emails to users.</li>
        <li><strong>Reset Password</strong>: Securely update passwords for users.</li>
        <li><strong>Current User</strong>: Retrieve details of the currently logged-in user.</li>
        <li><strong>Login</strong>: Authenticate users and generate access tokens.</li>
        <li><strong>Access Token</strong>: Issue tokens for user authentication.</li>
        <li><strong>Refresh Tokens</strong>: Generate new access tokens using refresh tokens for extended sessions.</li>
    </ul>

    <h2>Technology Stack</h2>
    <ul>
        <li><strong>TypeScript</strong>: Provides static type checking for robust code quality.</li>
        <li><strong>Express@5</strong>: A popular web server framework for building APIs.</li>
        <li><strong>Typegoose</strong>: A TypeScript wrapper for Mongoose, making it easier to define and manage schemas.</li>
        <li><strong>argon2</strong>: A secure hashing algorithm for password storage.</li>
        <li><strong>Zod</strong>: A TypeScript-first schema declaration and validation library.</li>
        <li><strong>jsonwebtoken</strong>: Used for signing and verifying JSON Web Tokens (JWT).</li>
        <li><strong>Nodemailer</strong>: Handles sending emails, including password reset links and verification emails.</li>
        <li><strong>Pino</strong>: Fast and low-overhead logging library.</li>
        <li><strong>config</strong>: Manages configuration settings and environment variables.</li>
    </ul>

    <h2>Prerequisites</h2>
    <p>To follow along with this project, you will need:</p>
    <ul>
        <li><strong>Postman</strong>: For testing API endpoints.</li>
        <li><strong>Node.js</strong>: JavaScript runtime for running the server.</li>
        <li><strong>MongoDB</strong>: NoSQL database for storing user data.</li>
    </ul>

    <h2>Getting Started</h2>
    <ol>
        <li><strong>Clone the Repository</strong>
            <pre><code>git clone https://github.com/yourusername/authentication-api.git</code></pre>
        </li>
        <li><strong>Install Dependencies</strong>
            <p>Navigate to the project directory and install the required packages:</p>
            <pre><code>cd authentication-api
npm install</code></pre>
        </li>
        <li><strong>Set Up Environment Variables</strong>
            <p>Create a <code>.env</code> file in the root directory and add the necessary configuration variables:</p>
            <pre><code>PORT=3000
MONGO_URI=mongodb://localhost:27017/auth-db
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password</code></pre>
        </li>
        <li><strong>Start the Server</strong>
            <p>Run the server using:</p>
            <pre><code>npm start</code></pre>
        </li>
        <li><strong>Test the API</strong>
            <p>Use Postman or any API client to test the endpoints listed in the Features section.</p>
        </li>
    </ol>

    <h2>Documentation</h2>
    <p>For detailed information on the API endpoints, request/response formats, and usage examples, refer to the <a href="docs/API.md">API Documentation</a>.</p>

    <h2>Contributing</h2>
    <p>Feel free to open issues or submit pull requests to contribute to the project. Please adhere to the contribution guidelines outlined in the <a href="CONTRIBUTING.md">CONTRIBUTING.md</a> file.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

    <h2>Contact</h2>
    <p>For any inquiries or feedback, please reach out to me at <a href="mailto:your.email@example.com">your.email@example.com</a>.</p>
</body>
</html>
