
import request from 'superagent'
import {getTodoItems,addTodoItem} from '../actions/todosAc'


const todosUrl = 'http://localhost:3000/api/v1/todos'



export function getTodos(dispatch){

  return request 
         .get('/api/v1/todos')
         .then( response=> dispatch(getTodoItems(response.body)))
}

    
export function addTodo(newTodo,dispatch){

       return request

       .post('api/v1/todos')
         .send({todoName:newTodo.todoName})
         .then(res =>dispatch(addTodoItem(res.body)))
}