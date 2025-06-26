// Import mongoose to interact with MongoDB
const mongoose = require('mongoose');

// Define an async function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB URI stored in .env file
    await mongoose.connect(process.env.MONGO_URI);

    // Log success message if connection is established
    console.log("MongoDB Connected");
  } catch (err) {
    // If an error occurs during connection, log the error message
    console.error(err.message);

    // Exit the Node process with failure code (1)
    process.exit(1);
  }
};

// Export the function so it can be used in server.js
module.exports = connectDB;
