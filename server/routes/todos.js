
const express=require("express")
const router =express.Router()

const {getTodos} =require ("../db/connection")

router.get('/' ,(req, res)=>{

    getTodos()
     .then((todoLs) =>{
        console.log("It is my list :",todoLs)
         res.json(todoLs)
     })
     .catch((err) => {
      console.log(err);
      res.status(500);
    });
})

module.exports = router;    