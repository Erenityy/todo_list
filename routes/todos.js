const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create(req.body)
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

router.get('/', async (req, res) => {
  const todos = await Todo.find()
  res.json(todos);
})

router.get('/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  if (!todo) return res.status(404).json({ error: 'Not found' })
  res.json(todo)
})

router.put('/:id', async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(todo)
})

router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id)
  res.json({ message: 'Todo deleted' })
})

module.exports = router
