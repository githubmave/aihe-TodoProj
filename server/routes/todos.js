
const express=require("express")
const router =express.Router()

const {getTodos,getTodoById} =require ("../db/connection")

router.get('/' ,(req, res)=>{

    getTodos()
     .then((todoLs) =>{
        //console.log("It is my list :",todoLs)
         res.json(todoLs)
     })
     .catch((err) => {
      console.log(err);
      res.status(500);
    });
})

router.get('/:id' ,(req, res)=>{
    let id =req.params.id

    getTodoById(id)
     .then((todoIt) =>{
        //console.log("It is my list :",todoLs)
         res.json(todoIt)
     })
     .catch((err) => {
      console.log(err);
      res.status(500);
    });
})

router.get( 'update/:id',(req,res)=>{

    res.json()
})




module.exports = router;    