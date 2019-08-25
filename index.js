const express = require('express');
const app = express();
const mongoose = require('mongoose');

const env = process.env.NODE_ENV || 'development' || 'test'
if (env == 'development' || env == 'test'){
    require('dotenv').config();
}
const configDB = {
    development: process.env.DBDEV, // || 'mongodb://localhost/todo'
    test: process.env.DBTEST, 
    production: process.env.DBPROD
}

//const dbConnection = process.env.DBCONNECTION || 'mongodb://localhost/todo'
mongoose.connect(configDB[env], {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
.then(()=> console.log('connect DB'));

const morgan = require('morgan');
app.use(morgan('tiny')) // to show statement in console
app.use(express.json());

//using route-level middleware
const router = require('./routes/index.js');
app.use('/api', router);

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        messages: "Welcome to ToDo API"
    })
});

//perform error message if wrong type the endpoint/route
app.use(function(req, res){
    res.status(404).json({URL: req.originalUrl + "   is Not Found. Please Enter URL Correctly"})
})

//turn on the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server Started at ${Date()}`);
    console.log(`Listening on Port ${port}`)
});

module.exports = app //used to integration testing
