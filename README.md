# Taskio App

Taskio is a task management application built with React, Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, edit, and delete tasks
- Mark tasks as completed
- Responsive design for various screen sizes
- Uses React Query for data fetching and caching
- Modal for creating new tasks

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine
- MongoDB installed and running locally or accessible via a remote URI
- npm or yarn package manager

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mugisha-Samuella/TaskioMERN.git
   cd taskio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   PORT=4000
   MONGO_URI=your_mongodb_connection_uri
   ```

4. **Start the server**

   ```bash
   cd api
   npm i
   npm run dev
   ```

   This will start the backend server using Express.

5. **Start the React app**

   Open a new terminal tab and navigate to the `client` directory:

   ```bash
   cd client
   npm i
   npm run dev
   ```

   This will start the React development server.

## Usage

Once the server and React app are running:

- Open your browser and go to `http://localhost:5175` to use Taskio.
- You can create new tasks, edit existing ones, mark them as completed, and delete tasks.

## API

Taskio uses the following API routes:

- `GET /api/v1/tasks`: Get all tasks
- `GET /api/v1/tasks/one/:id`: Get a single task by ID
- `POST /api/v1/tasks/create`: Create a new task
- `DELETE /api/v1/tasks/delete`: Delete a task
- `PUT /api/v1/tasks/update`: Update a task

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
