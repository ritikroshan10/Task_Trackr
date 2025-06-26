// Import express to create a router
const express = require('express');

// Initialize an Express Router instance
const router = express.Router();

// Import the controller functions that handle each route's logic
const {
  getTasks,     // Controller to fetch all tasks
  createTask,   // Controller to create a new task
  updateTask,   // Controller to update a task by ID
  deleteTask,   // Controller to delete a task by ID
} = require('../controllers/taskController');


// ------------------- ROUTES ------------------- //

// GET /api/tasks
// Calls getTasks to fetch all tasks from the database
router.get('/', getTasks);

// POST /api/tasks
// Calls createTask to add a new task to the database
router.post('/', createTask);

// PUT /api/tasks/:id
// Calls updateTask to update the task (title or completed status)
router.put('/:id', updateTask);

// DELETE /api/tasks/:id
// Calls deleteTask to remove the task from the database
router.delete('/:id', deleteTask);


// Export the router so it can be used in server.js
module.exports = router;
