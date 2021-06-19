const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const todoSchema= new Schema({
    job:String,
    jobstatus:Boolean
});

const Todo=mongoose.model('Todolist',todoSchema);

module.exports=Todo;