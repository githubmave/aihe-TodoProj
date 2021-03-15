const env = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')

const connection = knex(config[env])

module.exports = {
       findTodo: findTodo,
       getTodos: getTodos,
       addTodo: addTodo,
       updateTodo: updateTodo,
       deleteTodo: deleteTodo
}

function findTodo(id, db = connection){

    return db('todos').select().where({id}).first()
}

function getTodos(db = connection){
   

     return db('todos')
         .select()
    
}

function addTodo(newTodo,db = connection){
       const todoName=newTodo.todoName

       return db('todos').insert({todoName})
              .then(ids => {return findTodo(ids[0],db) })
}

function deleteTodo(id, db = connection){

         return db('todos').delete().where({id})
                
}

function updateTodo(id, updatedTodo, db = connection){
           
       return db('todos').update(updatedTodo).where({id})
              .then(() =>findTodo(id,db))

}