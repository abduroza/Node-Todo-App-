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
            type: Boolean,
            enum: [true, false]
        }],
        default: [false]
    }
})
const Task = mongoose.model('Task', taskSchema)
module.exports = Task
