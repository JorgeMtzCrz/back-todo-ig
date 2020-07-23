const Task = require('../models/Task')


exports.createTask = async(req, res, next) => {
    Task.create({...req.body })
        .then(task => res.status(201).json({ task }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllTasks = (req, res, next) => {
    Task.find().populate('userId')
        .then(tasks => res.status(200).json({ tasks }))
        .catch(err => res.status(500).json({ err }))
}

exports.oneTask = (req, res, next) => {
    const { id } = req.params
    Task.findById(id)
        .then(task => res.status(200).json({ task }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateTask = (req, res, next) => {
    const { id } = req.params
    console.log(req.body)
    const { finish } = req.body
    Task.findByIdAndUpdate(id, { status: 'Completed', finishBy: finish }, { new: true })
        .then(tasks => res.status(200).json({ tasks }))
        .catch(err => res.status(500).json({ err }))
}

exports.deleteTask = (req, res, next) => {
    const { id } = req.params
    Task.findByIdAndDelete(id)
        .then(task => res.status(200).json({ task }))
        .catch(err => res.status(500).json({ err }))
}