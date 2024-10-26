import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); 

  const handleAddTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        description: newTask,
        isComplete: false,
      };
      setTasks([...tasks, task]);
      setNewTask(''); 
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
    <div >
      <div >
        <h2 >TODO APPLICATION</h2>

        <div >
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task description"
            
          />
          <button
            onClick={handleAddTask}
            
          >
            Add Task
          </button>
        </div>

        <div >
          <button
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            onClick={() => setFilter('complete')}
          >
            Complete
          </button>
          <button
            onClick={() => setFilter('incomplete')}
          >
            Incomplete
          </button>
        </div>

        <ul >
          {filteredTasks.map((task) => (
            <li key={task.id} >
              <div >
                <input
                  type="checkbox"
                  checked={task.isComplete}
                  onChange={() => handleToggleComplete(task.id)}
                  
                />
                <span className={task.isComplete ? 'line-through text-gray-500' : ''}>{task.description}</span>
              </div>
              <button
                onClick={() => handleRemoveTask(task.id)}
               
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
