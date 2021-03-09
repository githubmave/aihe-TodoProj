const env = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')

const connection = knex(config[env])

module.exports = {
       findTodo: findTodo,
       getTodos: getTodos,
       addTodo: addTodo
}

function findTodo(id, db = connection){

    return db('todos').select().where({id}).first()
}

function getTodos(db = connection){
   

     return db('todos')
         .select()
    
}

function addTodo(newTodo,db = connection){

       return db('todos').insert({newTodo})
              .then(ids => {return findTodo(ids[0],db) })
}
