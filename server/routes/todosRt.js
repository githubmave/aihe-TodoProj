
const { ReactWrapper } = require("enzyme");
const express=require("express")
const router =express.Router()

const {getTodos,addTodo,updateTodo,deleteTodo} =require ("../db/connection")

router.get('/' ,(req, res)=>{

    getTodos()
     .then((todoLis) =>{
        console.log("routes/todo.js/getTodos(/) It is my list :",todoLis)
         res.json(todoLis)
     })
     .catch((err) => {
      console.log(err);
      res.status(500);
    });
})

router.post('/',(req,res) => {

       const newTodo=req.body
       addTodo(newTodo)
        .then( todo=>{

            res.json(todo)
        })
        .catch(err =>{
            res.sendStatus(500) 

        })
})

router.delete('/:id',(req,res) =>{
       const id = Number(req.params.id)
        deleteTodo(id)
         .then(() =>res.sendStatus(200))
         .catch(()=>res.sendStatus(500))
})

router.patch('/:id',(req,res) =>{
       
     const id =Number(req.params.id)
     const updatedTodo = req.body
           updateTodo(id,updatedTodo)
            .then(newTodo => res.json(newTodo))

})
module.exports = router;    