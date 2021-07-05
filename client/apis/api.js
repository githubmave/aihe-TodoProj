
import request from 'superagent'
import {getTodoItems,addTodoItem,deleteItem} from '../actions/todosAc'


const todosUrl = 'http://localhost:3000/api/v1/todos'

 

export function getTodos(dispatch){

  return request 
         .get('/api/v1/todos')
         .then( response=> dispatch(getTodoItems(response.body)))
}

    

export function addTodo(newTodo,dispatch){
  return request
      .post('/api/v1/todos')
      .send({todoName: newTodo.todoName})
   
      .then(res => dispatch(addTodoItem(res.body)))
   }

export function updateTodo(id, updatedTodo,dispatch){

    return request
            .patch('/api/v1/todos/'+id)
            .send({updatedTodo})
            .then( res => dispatch(updateTodoItem(id, res.body)) )
              
}

export function deleteTodo(id,dispatch){
       console.log("api/deleTodo: called")
       return request
              .delete('/api/v1/todos/'+id)
              .then(res => dispatch(deleteItem(id)))

     
}