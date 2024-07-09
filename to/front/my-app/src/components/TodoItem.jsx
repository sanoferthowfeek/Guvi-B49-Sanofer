import React from 'react';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <div>
      <h3 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
        <button onClick={() => onToggleComplete(todo._id)}>
          {todo.completed ? 'Unmark' : 'Complete'}
        </button>
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </h3>
    </div>
  );
};

export default TodoItem;
