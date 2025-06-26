import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from '../components/TaskCard';

const Home = () => {
  // ------------------------------State for fetched tasks-----------------------
  const [tasks, setTasks] = useState([]);

  // ------------------------------State for new task input-----------------------
  const [title, setTitle] = useState("");

  //------------------------------ Fetch all tasks from backend-------------------
  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // -------------------------------add new tasks-----------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await axios.post('http://localhost:5000/api/tasks', { title });
    setTitle("");
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 py-10 px-4">

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-gray-200">

        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">📝 Task Manager</h1>

        {/*---------------------form--------------------------- */}
        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <input
            type="text"
            className="flex-1 p-3 border-2 border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg shadow transition">
            Add
          </button>
        </form>

        {/* ----------------------------Render list of tasks----------------------- */}
        <div className="space-y-3">
          {tasks.map(task => (
            <TaskCard key={task._id} task={task} fetchTasks={fetchTasks} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
