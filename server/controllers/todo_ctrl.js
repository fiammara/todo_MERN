const Todo = require('../models/todo_model')

createTodo = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an Todo',
        })
    }

    const Todo = new Todo(body)

    if (!Todo) {
        return res.status(400).json({ success: false, error: err })
    }

    Todo
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: Todo._id,
                message: 'Todo created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Todo not created!',
            })
        })
}

updateTodo = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Todo.findOne({ _id: req.params.id }, (err, Todo) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Todo not found!',
            })
        }
        Todo.name = body.name
        
        Todo
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: Todo._id,
                    message: 'Todo updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Todo not updated!',
                })
            })
    })
}

deleteTodo = async (req, res) => {
    await Todo.findOneAndDelete({ _id: req.params.id }, (err, Todo) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Todo) {
            return res
                .status(404)
                .json({ success: false, error: `Todo not found` })
        }

        return res.status(200).json({ success: true, data: Todo })
    }).catch(err => console.log(err))
}

getTodoById = async (req, res) => {
    await Todo.findOne({ _id: req.params.id }, (err, Todo) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Todo not found` })
        }
        return res.status(200).json({ success: true, data: Todo })
    }).catch(err => console.log(err))
}

getTodo = async (req, res) => {
    await Todo.find({}, (err, Todo) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Todo.length) {
            return res
                .status(404)
                .json({ success: false, error: `Todo not found` })
        }
        return res.status(200).json({ success: true, data: Todo })
    }).catch(err => console.log(err))
}

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodo,
    getTodoById,
}
