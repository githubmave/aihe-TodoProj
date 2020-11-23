const env = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')

const connection = knex(config[env])

module.exports = {
       getTodos: getTodos,
       getTodoById: getTodoById,
       addTodo: addTodo
}


function getTodos(db = connection){
        return db('todos')
         .select()
}

function getTodoById(id,db = connection){
       return db('todos')
        .select()
        .where("id",id)
        .first()
        .then((todoIt) =>{
           return todoIt

        })
}

function addTodo(todoName, priority, completed, db= connection) {
       let todoRw = {};
       todoRw.todoName = todoName;
       todoRw.priority = priority;
       todoRw.completed = completed;
   
     console.log(todoRw);
     return db("todos")
     .insert(todoRw);
}