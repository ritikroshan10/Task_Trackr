// Import mongoose to define schema and model
const mongoose = require('mongoose');

// Define the schema (structure) for a Task document in MongoDB
const taskSchema = new mongoose.Schema({
  // 'title' field: stores the task text
  title: {
    type: String,      // Data type is string
    required: true,    // Task must have a title (validation)
  },

  // 'completed' field: stores whether task is done or not
  completed: {
    type: Boolean,     // Data type is boolean (true/false)
    default: false,    // By default, tasks are not completed
  }
}, { 
  // Add automatic timestamps: createdAt and updatedAt
  timestamps: true 
});

// Create and export the Mongoose model
// 'Task' becomes the name of the model, which maps to the 'tasks' collection in MongoDB
module.exports = mongoose.model('Task', taskSchema);
