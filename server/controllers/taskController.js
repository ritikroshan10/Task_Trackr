// Import the Task model to interact with the MongoDB tasks collection
const Task = require('../models/Task');


// ---------------------------
// GET /api/tasks
// Fetch all tasks from database
const getTasks = async (req, res) => {
  // Find all tasks and sort by creation time (latest first)
  const tasks = await Task.find().sort({ createdAt: -1 });

  // Send the tasks as a JSON response
  res.json(tasks);
};


// ---------------------------
// POST /api/tasks
// Create a new task
const createTask = async (req, res) => {
  // Destructure title from the request body
  const { title } = req.body;

  // Create a new Task instance using the provided title
  const task = new Task({ title });

  // Save the new task to the database
  await task.save();

  // Respond with the created task and status 201 (created)
  res.status(201).json(task);
};


// ---------------------------
// PUT /api/tasks/:id
// Update task's title or completed status
const updateTask = async (req, res) => {
  // Extract task ID from the URL parameters
  const { id } = req.params;

  // Find the task by ID and update it with the request body
  // { new: true } returns the updated task
  const task = await Task.findByIdAndUpdate(id, req.body, { new: true });

  // Return the updated task
  res.json(task);
};


// ---------------------------
// DELETE /api/tasks/:id
// Delete a task by ID
const deleteTask = async (req, res) => {
  // Extract task ID from the URL parameters
  const { id } = req.params;

  // Find and delete the task with the given ID
  await Task.findByIdAndDelete(id);

  // Send a success message as response
  res.json({ message: 'Task deleted' });
};


// Export all controller functions for use in routes
module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};



