const router = require('express').Router();
const { createTask, getAllTasks, deleteTask, updateTask, oneTask } = require('../controllers/taskControllers')

router.post('/create', createTask)
router.get('/all', getAllTasks)
router.get('detail/:id', oneTask)
router.patch('/update/:id', updateTask)
router.delete('/delete/:id', deleteTask)

module.exports = router;