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
       // let todoRw = {};
       // todoRw.todoName = todoName;
       // todoRw.priority = priority;
       // todoRw.completed = completed;
   
     //console.log(todoRw);
     return db("todos")
     .insert(todo)
     .then(([id])=> id)
}


function updateTodo(currId,todo,db=connection){

      return db('todos')
         .update(todo)
         .where('id',currId)

}

function deleteTodo(currId,db=connection){
      return db('todos')
         .where('id',currId)
         .delete()
}


