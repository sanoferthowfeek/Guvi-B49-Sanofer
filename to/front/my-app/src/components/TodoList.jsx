import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem.jsx';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const token = localStorage.getItem('token');
  //     if (!token) {
  //       console.error('No token found');
  //       // Handle no token scenario, e.g., redirect to login page
  //       return;
  //     }
  //     try {
  //       const res = await axios.get('http://localhost:5000/api/todos', {
  //         headers: { 'x-auth-token': token }
  //       });
  //       setTodos(res.data);
  //     } catch (err) {
  //       console.error(err.response.data);
  //     }
  //   };
  
  //   fetchTodos();
  // }, []);
  
  const addTodo = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      // Handle no token scenario (e.g., redirect to login page)
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/todos', { text, priority }, {
        headers: { 'x-auth-token': token }
      });
      setTodos([...todos, res.data]);
      setText('');
    } catch (err) {
      console.error('Error adding todo:', err.response.data);
    }
  };

  const deleteTodo = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      // Handle no token scenario (e.g., redirect to login page)
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`, {
        headers: { 'x-auth-token': token }
      });
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err.response.data);
    }
  };

  const toggleComplete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      // Handle no token scenario (e.g., redirect to login page)
      return;
    }
    try {
      const todo = todos.find(todo => todo._id === id);
      const res = await axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !todo.completed }, {
        headers: { 'x-auth-token': token }
      });
      setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
    } catch (err) {
      console.error('Error toggling todo:', err.response.data);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={addTodo}>Add</button>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} onDelete={deleteTodo} onToggleComplete={toggleComplete} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
