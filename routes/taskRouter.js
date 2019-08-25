const router = require('express').Router();
const taskController = require('../controller/taskController.js')

router.post('/create', taskController.createTodo)
router.put('/update/:id', taskController.updateTodo)
router.delete('/delete/:id', taskController.deleteTodo)
router.get('/show/:id', taskController.showTodo)
router.get('/index', taskController.indexTodo)

module.exports = router;
