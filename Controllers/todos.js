const express = require('express');
var router=express.Router();
const tododb=require('../DBrepo/mongotodo');

router.get('/',(req,res)=>{
    //db get method
    tododb.ViewTodo()
    .then(data=>res.json(data))
})

router.post('/', function (req, res) {
    //db post method
    let todo={job:req.body.job,jobstatus:false};
    tododb.AddTodo(todo)
    .then(data=>res.json(data))
})

router.put('/',(req,res)=>{
    let todo={job:req.body.job,jobstatus:req.body.jobstatus}
    tododb.UpdateTodo(todo)
    .then(data=>{
        res.json(data);
    })
})
// router.get('/todos/:id', function (req, res) {
//     console.log(req.params.id);
//     let currenttodo=todo.filter((list)=>(list.id == req.params.id));
//     console.log(currenttodo);
//     res.json(currenttodo);
// })
router.delete('/:job', function (req, res) {
    //db delete method
    tododb.DeleteTodo({job:req.params.job})
    .then(data=>res.json(data))
})

module.exports = router;
