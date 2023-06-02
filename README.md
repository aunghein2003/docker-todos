# Dockerized Full-Stack Application

This is my first project of Docker. Todos full-stack application with a frontend using React, a backend using Node.js with Express, and a MongoDB database.

## Prerequisites

- Docker: https://docs.docker.com/get-docker/

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/aunghein2003/docker-todos.git
   cd docker-todos

2. Build the Docker images

   ```bash
   docker-compose build

3. Start the application

   ```bash
   docker-compose up

4. Access the application
  - Frontend: http://localhost:3000
  - Backend: http://localhost:5000

## Development
During development, you can work on the frontend and backend code separately.

- Frontend:

  -  Navigate to the frontend/ directory.
  -  Run npm install to install the dependencies.
  -  Run npm start to start the development server.
- Backend:

   -   Navigate to the backend/ directory.
   -   Run npm install to install the dependencies.
   -   Run npm run dev to start the backend server with hot-reloading.
