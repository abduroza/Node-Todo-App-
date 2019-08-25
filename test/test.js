process.env.NODE_ENV = 'test';
const server = require ('../index.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const Task = require('../model/task.js');

chai.use(chaiHttp);
describe('/GET root path', () => {
    it ("should return true in root path", (done) => {
        chai.request(server).get('/').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('success').equal(true);
            res.body.should.have.property('messages').equal("Welcome to ToDo API");
            done();
        })
    })
})

describe('/GET all task', () => {
    it ("should  return true in root path", (done) => {
        chai.request(server).get('/api/task/index').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an('object')
            done();
        })
    })
})

describe('/GET a task', () => {
    it ("should show one task based on ID", (done) => {
        let task = {
            _id: '5d62395aeac1ea0e6a005cc5'
        }
        chai.request(server).get('/api/task/show/').send(task).end((err, res) => { 
            res.should.have.status(201);
            res.body.should.be.an('object')
            // res.body.should.have.property('success').equal(true);
            // res.body.should.have.property('message').equal('category success added')
            // res.body.category.should.have.property('name');
            // res.body.category.should.have.property('banner')
            done();
        })
    })
})

