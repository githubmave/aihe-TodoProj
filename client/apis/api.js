
import request from 'superagent'
import {getTodoItems} from '../actions/todosAc'

const todosUrl = 'http://localhost:3000/api/v1/todos'

export function getTodos (dispatch) {
   
  return request
   // .get(todosUrl)
    .get('/api/v1/todos')
    .then( response => dispatch(getTodoItems(response.body)))
     
      
}

    
