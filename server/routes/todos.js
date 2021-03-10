
const express=require("express")
const router =express.Router()

const {getTodos,findTodo,addTodo} =require ("../db/connection")

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
            res.status(500) 

        })
})

module.exports = router;    