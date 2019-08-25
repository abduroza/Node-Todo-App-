const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3
    },
    date: {
        type: Date
    },
    note: {
        type: String,
        max: 500
    },
    priority: {
        type: [{
            type: String,
            enum: ['none', 'low', 'medium', 'high']
        }],
        default: ['none']
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
})
const Task = mongoose.model('User', taskSchema)
module.exports = Task
