import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // Filter: 'all', 'complete', 'incomplete'

  const handleAddTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        description: newTask,
        isComplete: false,
      };
      setTasks([...tasks, task]);
      setNewTask(''); // Clear the input field
    }
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'complete') return task.isComplete;
    if (filter === 'incomplete') return !task.isComplete;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold text-center mb-4">TODO APPLICATION</h2>

        {/* Add Task Input */}
        <div className="mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task description"
            className="border rounded w-full p-2 mb-2"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Add Task
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-4 space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('complete')}
            className={`px-3 py-1 rounded ${filter === 'complete' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            Complete
          </button>
          <button
            onClick={() => setFilter('incomplete')}
            className={`px-3 py-1 rounded ${filter === 'incomplete' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            Incomplete
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.isComplete}
                  onChange={() => handleToggleComplete(task.id)}
                  className="mr-2"
                />
                <span className={task.isComplete ? 'line-through text-gray-500' : ''}>{task.description}</span>
              </div>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
