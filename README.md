# CRUD To-Do Application

This is a simple CRUD (Create, Read, Update, Delete) To-Do application built using the MERN stack. The app allows users to manage a list of items where each item includes a name, email, and age.

# Technologies Used

# Frontend

React.js: For building the user interface.

Bootstrap: For responsive design and styling.

Axios: For making HTTP requests.

# Backend

Node.js: Server runtime environment.

Express.js: For handling API routes.

MongoDB: Database for storing user data.

Mongoose: For database interaction and schema definition.

# Installation

1. Clone the repository:

```````````````````````
git clone https://github.com/your-username/crud-to-do.git
cd crud-to-do
`````````````````

2. Setup Backend:

`````````````````````
cd backend
npm install
````````````````````````

 Create a .env file in the backend folder with the following:

``````````````````
PORT=3001

MONGO_URI=your_mongodb_connection_string
````````````````

Start the backend server:

`````````````````
npm start
```````````````````````

3. Setup Frontend:

`````````````````
cd ../frontend
npm install
```````````````````

Start the frontend server:

````````````````````
npm start
```````````````````

4. Access the App:

`````````````````
Frontend: http://localhost:3000
Backend: http://localhost:3001
````````````````

# API Endpoints
User Routes

GET /users: Fetch all users.

POST /users: Add a new user.

PUT /users/:id: Update a user by ID.

DELETE /users/:id: Delete a user by ID.