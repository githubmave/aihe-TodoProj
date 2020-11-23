const env = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')

const connection = knex(config[env])

module.exports = {
       getTodos: getTodos
}


function getTodos(db = connection){
   

     return db('todos')
         .select()
    
}

