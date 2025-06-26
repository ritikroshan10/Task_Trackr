import { useState } from 'react';
import axios from 'axios';


const TaskCard = ({ task, fetchTasks }) => {

  //--------------------- State to track if we are in edit mode-------------------
  const [isEditing, setIsEditing] = useState(false);

  // ---------------------State to hold the edited title  -->> put he value from backend in usestate-------------------------
  const [editedTitle, setEditedTitle] = useState(task.title);

  // -------------Function to toggle the "completed" status of a task----------
  const toggleComplete = async () => {
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
      completed: !task.completed, // send opposite value
    });
    fetchTasks(); // refresh tasks list after update
  };

  //---------------------------- Function to delete the task------------------------
  const deleteTask = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
    fetchTasks();
  };

  // -----------------------------Function to save the edited task title-------------------
  const saveEdit = async () => {
    if (!editedTitle.trim()) return;
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
      title: editedTitle,
    });
    setIsEditing(false); // exit edit mode
    fetchTasks();
  };
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg border-l-4 border-indigo-400 shadow hover:shadow-md transition-all duration-200">
      {/*-------------------------------------------- Left: checkbox + title/input ----------------------*/}
      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
          className="h-5 w-5 accent-indigo-500"
        />

        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
              className="w-full border px-3 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              autoFocus
            />
          ) : (
            <p
              className={`text-base ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'
                }`}
            >
              {task.title}
            </p>
          )}
        </div>
      </div>

      {/* -----------------------------------Right: edit/save/delete---------------------------- */}
      <div className="flex gap-2 ml-4">
        {isEditing ? (
          <button
            onClick={saveEdit}
            className="text-green-600 hover:text-green-800 text-sm font-medium"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Edit
          </button>
        )}

        <button
          onClick={deleteTask}
          className="text-red-500 hover:text-red-700 text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );

};

export default TaskCard;
