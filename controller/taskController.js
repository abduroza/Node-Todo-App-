const Task = require('../model/task.js');
const {sucRes, failRes} = require('../helper/resFormat.js');


function createTodo(req, res){
    Task.create({
        name: req.body.name, date: req.body.date, note: req.body.note, priority: req.body.priority, status: req.body.status
    }, (err, data) => {
        if (err) return res.status(404).json({ message: "Wrong Type", err});
        res.status(201).json(sucRes(data, "Entry Create Success"));
        console.log(data)
    })
}
function updateTodo (req, res){
    Task.findByIdAndUpdate(
        req.params.id, {$set: req.body
        }, (err, data) => {
            if (err) return res.status(404).json({ message: "error", err});
            res.status(200).json(sucRes(req.body, "Entry Update Success"));
        }
    )
}
function deleteTodo (req, res){
    Task.findByIdAndDelete(
        req.params.id
        , (err, data) => {
            if (err) return res.status(404).json(failRes("ID Not Found"));
            res.status(201).json(sucRes(data, "Entry Delete Success"));
        }
    )
}
function showTodo (req, res){
    Task.findById(
        req.params.id, (err, data)=> {
            if (err) return res.status(404).json(failRes("ID not found"));
            res.status(201).json(sucRes(data, "An Entry Show Success"));
        }
    )
}
function indexTodo (req, res){
    Task.find({
    }, (err, data) => {
        if (err) return res.status(404).json(failRes("Entry Faiil to Display"));
        res.status(200).json(sucRes(data, "Displaying All Entry Success"));
    })
}
function markTodo(req, res){
}
module.exports = {createTodo, deleteTodo, updateTodo, showTodo, indexTodo};
