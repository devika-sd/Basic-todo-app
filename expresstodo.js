const express=require('express');
const cors=require('cors');
const app=express();
const todos=require('./Controllers/todos');

//json parser
app.use(express.json());

app.use(cors());

app.use(express.static('/my-app/public'));

app.use('/todos',todos);

app.listen(3004, ()=>{
    console.log("express is running on port 3004");
});