
import request from 'superagent'
import {getTodoItems} from '../actions/todosAc'

const todosUrl = 'http://localhost:3000/api/v1/todos'

export function getTodos (dispatch) {
   
  return request
   // .get(todosUrl)
    .get('/api/v1/todos')
    .then( response => dispatch(getTodoItems(response.body)))
      //console.log("my todos object look like:",response.body)
    // .then(res => {
    //     res.body.foreach(todo => validateNoSnakeCase(todo))
    //     return res.body
    //   })
       
      
      
    

    // console.log("my todos object look like:",res.body)
      
}

    
