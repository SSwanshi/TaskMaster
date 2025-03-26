const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', (req, res) => {
  try {
    const tasks = Task.getAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }
    
    const newTask = {
      id: Date.now().toString(),
      title,
      description: description || '',
      completed: false
    };
    
    Task.create(newTask);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    
    const existingTask = Task.getById(id);
    if (!existingTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    const updatedTask = Task.update(id, {
      title: title || existingTask.title,
      description: description || existingTask.description,
      completed: completed !== undefined ? completed : existingTask.completed
    });
    
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const success = Task.delete(id);
    
    if (!success) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;