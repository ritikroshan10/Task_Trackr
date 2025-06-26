# 📝 Task Manager

A simple and beautiful **TaskTracer** built with the **MERN Stack** (MongoDB, Express, React, Node.js) and styled using **Tailwind CSS**.

---

## 🚀 Features

- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Edit task titles
- ✅ Delete tasks
- ✅ Fully responsive design with Tailwind CSS
- ✅ REST API with Express + MongoDB

---

## 🖥️ Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS + dotenv

---

## 📂 Folder Structure

TaskTracer/
├── server/
│ ├── models/Task.js
│ ├── controllers/taskController.js
│ ├── routes/taskRoutes.js
│ ├── config/db.js
│ └── server.js
├── client/
│ ├── src/
│ │ ├── components/TaskCard.jsx
│ │ ├── pages/Home.jsx
│ │ └── App.js
│ └── tailwind.config.js

1-->>>. Setup Backend

cd server
npm install

1.1--- Create a .env file in backend/:

MONGO_URI=your_mongodb_connection_string
PORT=5000


1.2--- Start the backend server:

nodemon server.js

2--->>. Setup Frontend

cd ../client

npm install

npm run dev


🌐 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Fetch all tasks   |
| POST   | `/api/tasks`     | Create a new task |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |
