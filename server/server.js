const express = require('express')
const path = require('path')
const todoRoutes = require('./routes/todosRt')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

//Routes

server.use('/api/v1/todos',todoRoutes)
module.exports = server
