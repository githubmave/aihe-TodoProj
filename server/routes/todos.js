
const express=require("express")
const router =express.Router()

const {getTodos,getTodoById,addTodo,updateTodo,deleteTodo} =require ("../db/connection")

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
   // res.json({"result":"just for fun test"})
})

router.get('/:id' ,(req, res)=>{
    let id =req.params.id
  //  console.log("it is id:", id)
    getTodoById(id)
     .then((todoIt) =>{
      //  console.log("It is my todo Item :",todoIt)
         res.json(todoIt)
     })
     .catch((err) => {
      console.log(err);
      res.status(500);
    });
})

router.post( '/' ,(req,res)=> {
      const currTodo = req.body
      console.log(" From router.post:",req.body)

   

    addTodo(currTodo)
      .then(currTodo =>{      
        res.json(currTodo)
      })   

      .catch(err => {
         res.status(500).send(err.message)


      })
})

router.patch( '/:id',(req,res)=>{
    const id = Number(req.params.id)
    const currTodo=req.body

    updateTodo(id,currTodo)
      
      .then( currTodo => {
        res.json(currTodo) 
      })
    
})

router.delete('/:id',(req,res)=>{
    const id =req.params.id
    console.log("it is delete id:", id)


    deleteTodo(id)
       .then(() => {

        res.sendStatus(200)
       })

})
 

module.exports = router;    