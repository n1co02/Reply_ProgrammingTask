# Express.js Template

## Overview

This Express.js template is pre-configured with essential tools like Prettier, ESLint, and Prisma ORM, and includes Docker support for easy deployment. It's ideal for quickly starting a scalable web application.

## Features

- **Express.js** for web server management.
- **Docker** support for containerization.
- **Prisma ORM** for database operations.
- **Prettier** and **ESLint** for code formatting and linting.
- **Custom Logging** functionality for different message types.

## Project Structure

/src/ # Main application source code
/constants.ts # Application constants
/database/ # Prisma ORM configurations
/main.ts # Entry point that starts the server
/server/ # Server setup and middleware
/router/ # Route definitions
/types.ts # Enums for system-wide types
/utility/ # Utility functions and classes
Dockerfile # Docker configuration file
.eslintrc.json # ESLint configuration
.prettierrc # Prettier configuration

## Setup Instructions
npm install
npm start

### Prerequisites

- Node.js
- Docker (optional)

### Installation

Clone the repository and navigate to the directory:

git clone https://github.com/n1co02/express.js-template.git

### Run using Docker:

docker build -t your-app-name .
docker run -p 4042:4042 your-app-name

### Usage
Main Application: Start with src/main.ts.
Add Routes: Extend src/router/testRouter.ts or add new routers.
Logging: Use the log function from src/utility/log.ts for colored logging based on message type.
