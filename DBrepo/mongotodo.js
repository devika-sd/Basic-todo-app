const mongoose = require('mongoose');
const Todo=require('../models/todo');

// 4.Connection to db
console.log('attempting to connect')

// 4. Create connection
  mongoose.connect('mongodb://localhost:27017/todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

// Use connect method to connect to the server
function ViewTodo()
{
    return new Promise((resolve,reject)=>{
        Todo.find({},(err,doc)=>{
            if(err) throw err;
            resolve(doc);
        })
    })
}

function AddTodo(userdata)
{
    return new Promise((resolve,reject)=>{
        let todoobj=new Todo();
        todoobj.job=userdata.job;
        todoobj.jobstatus=userdata.jobstatus;
        todoobj.save((err)=>{
            if(err) throw err;
            resolve({message:"insert success"});
        })
    })
}
function UpdateTodo(todo)
{
    return new Promise((resolve,reject)=>{
        Todo.updateOne({job:todo.job},{jobstatus:todo.jobstatus},(err)=>{
            if(err) throw err;
            resolve({message:"update successful"});
        })
    })
}
function DeleteTodo(userdata)
{
    return new Promise((resolve,reject)=>{
        Todo.deleteOne(userdata,(err)=>{
            if(err) throw err;
            resolve({message:"delete success"})
        })
    })
}
module.exports={DeleteTodo,AddTodo,ViewTodo,UpdateTodo}