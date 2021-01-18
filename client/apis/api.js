
import request from 'superagent'

const todosUrl = 'http://localhost:3000/api/v1/todos'

export function getTodos () {
   
  return request
   // .get(todosUrl)
    .get('/api/v1/todos')
    .then( response => response.body)
      //console.log("my todos object look like:",response.body)
    // .then(res => {
    //     res.body.foreach(todo => validateNoSnakeCase(todo))
    //     return res.body
    //   })
       
      
      
    

    // console.log("my todos object look like:",res.body)
      
}

    
