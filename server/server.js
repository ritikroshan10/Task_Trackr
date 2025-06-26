//================================================================= 1 step=================================
// Import express to create the server and handle routes
const express = require('express');

// Import cors to allow cross-origin requests (frontend <-> backend)
const cors = require('cors');

// Import dotenv to read environment variables from .env file
const dotenv = require('dotenv');

// Import taskRoutes for handling /api/tasks endpoints
const taskRoutes = require('./routes/taskRoutes');

// Import the custom function to connect MongoDB
const connectDB = require('./config/db');

//------------------------------------------------------------------1.1 connect to database-------------------
// Load environment variables from .env file (like MONGO_URI, PORT)
dotenv.config();

// Connect to MongoDB database
connectDB();

//---------------------------------------------1.2 create app instance and done middle ware part---------------------
// Create an instance of the Express app
const app = express();

// Enable CORS so frontend (React) can talk to backend (Express)
app.use(cors());

// Middleware to parse incoming JSON data from requests
app.use(express.json());

//------------------------------------------------ 1.3 routes-----------------------------
// Mount the taskRoutes at path /api/tasks
// So all routes in taskRoutes.js will start with /api/tasks
app.use('/api/tasks', taskRoutes);


//---------------------------------------------------------------1.4 port listen-------------------------
// Define the port to listen on (from .env or default 5000)
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
