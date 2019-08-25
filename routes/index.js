const router = require('express').Router()
const taskRouter = require('./taskRouter.js')

router.use('/task', taskRouter)

module.exports = router;
