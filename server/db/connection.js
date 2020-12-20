const env = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')

const connection = knex(config[env])

module.exports = {
       getTodos,
       getTodoById,
       addTodo,
       updateTodo,
       deleteTodo
}


function getTodos(db = connection){
        return db('todos')
         .select()
}

function getTodoById(id,db = connection){
       return db('todos')
        .select()
        //.where({id: 1})
        .where('id', id)
        .first()

}

function addTodo(todo, db= connection) {
  
     return db("todos")
     .insert(todo) 
     .then(ids => {

       return getTodoById(ids[0])

     }) 
}   
      
         
function updateTodo(id,updatedTodo,db=connection){
 
      return db('todos')
         .update(updatedTodo)
         .where('id',id)
         
        
         .then(() => {

              return getTodoById(id)
         })

}

function deleteTodo(id,db=connection){
      return db('todos')
         .where('id',id)
         .delete()
}


