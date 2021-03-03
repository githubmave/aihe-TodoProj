
import request from 'superagent'


const todosUrl = 'http://localhost:3000/api/v1/todos'

export function getTodos () {
  
  return request
   // .get(todosUrl)
    
    .get('/api/v1/todos')
    
    .then( response => response.body)
     
      
}

    
