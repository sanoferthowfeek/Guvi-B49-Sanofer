import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State to manage tasks and search filter
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({ title: '', dueDate: '', priority: 'Low', status: 'In Progress' });
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Handle form inputs
  const handleInputChange = (e) => {
    setTaskInput({ ...taskInput, [e.target.name]: e.target.value });
  };

  // Add or edit task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTaskId
            ? { ...taskInput, id: editingTaskId }
            : task
        )
      );
      setIsEditing(false);
      setEditingTaskId(null);
    } else {
      setTasks([
        ...tasks,
        { ...taskInput, id: Date.now(), completed: false },
      ]);
    }
    setTaskInput({ title: '', dueDate: '', priority: 'Low', status: 'In Progress' });
  };

  // Delete task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit task
  const handleEdit = (task) => {
    setTaskInput({ title: task.title, dueDate: task.dueDate, priority: task.priority, status: task.status });
    setIsEditing(true);
    setEditingTaskId(task.id);
  };

  // Toggle completion status
  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Search/filter tasks
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate) || b.priority.localeCompare(a.priority));

  return (
    <div className="App">
      <h1>Task Manager</h1>

      {/* Task form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={taskInput.title}
          onChange={handleInputChange}
          placeholder="Task Title"
          required
        />
        <input
          type="date"
          name="dueDate"
          value={taskInput.dueDate}
          onChange={handleInputChange}
          required
        />
        <select name="priority" value={taskInput.priority} onChange={handleInputChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select name="status" value={taskInput.status} onChange={handleInputChange}>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">{isEditing ? 'Edit Task' : 'Add Task'}</button>
      </form>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search Tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Task List */}
      <ul>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li key={task.id}>
              <div className={`task ${task.completed ? 'completed' : ''}`}>
                <h3>{task.title}</h3>
                <p>Due Date: {task.dueDate}</p>
                <p>Priority: {task.priority}</p>
                <p>Status: {task.status}</p>
                <button onClick={() => toggleCompletion(task.id)}>
                  {task.completed ? 'Mark In Progress' : 'Mark Completed'}
                </button>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </ul>
    </div>
  );
};

export default App;
