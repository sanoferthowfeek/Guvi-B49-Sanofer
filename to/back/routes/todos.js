const express = require('express');
const auth = require('../middleware/auth');
const Todo = require('../models/Todo');
const router = express.Router();

// Get all todos for a user
router.get('/', auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create a new todo
router.post('/', auth, async (req, res) => {
  const { text, priority } = req.body;

  try {
    const newTodo = new Todo({
      text,
      priority,
      user: req.user.id
    });

    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update a todo
router.put('/:id', auth, async (req, res) => {
  const { text, completed, priority } = req.body;

  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    // Ensure user owns the todo
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: { text, completed, priority } },
      { new: true }
    );

    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete a todo
router.delete('/:id', auth, async (req, res) => {
  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    // Ensure user owns the todo
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Todo.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Todo removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
