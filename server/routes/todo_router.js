const express = require('express')

const TodoCtrl = require('../controllers/todo_ctrl')

const router = express.Router()

router.post('/todos', TodoCtrl.createTodo)
router.put('/todos/:id', TodoCtrl.updateTodo)
router.delete('/todos/:id', TodoCtrl.deleteTodo)
router.get('/todos/:id', TodoCtrl.getTodoById)
router.get('/todos', TodoCtrl.getTodo)

module.exports = router
