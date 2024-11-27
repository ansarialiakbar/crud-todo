const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

// creating connection with database
mongoose.connect("mongodb://127.0.0.1:27017/crud1")

// api for get method
app.get('/', (req, res) => {
    userModel.find({})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
})


app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findById({_id:id})
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        res.json(err)
    });
})

// for update
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
         email: req.body.email,
          age:req.body.age})
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        res.json(err)
    });
})

// api for delete
app.delete('/deleteUser/:id', (req, res)=> {
    const id = req.params.id;
    userModel.findByIdAndDelete({_id: id})
    .then((res)=> res.json())
    .catch((err) => res.json(err))
})

// api for to create a new reccord
app.post("/createUser", (req, res) => {
    userModel.create(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})

// to run our server
app.listen(3001, () => {
    console.log("Server is Running");
    
})