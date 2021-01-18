
const express=require("express")
const router =express.Router()

const {getTodos} =require ("../db/connection")

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

module.exports = router;    