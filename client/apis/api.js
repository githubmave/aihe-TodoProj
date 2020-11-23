import { response } from 'express'
import request from 'superagent'

const todosUrl = 'http://localhost:3000/api/v1/todos'

export function getTodos () {
  return request
    .get(todosUrl)
    .then(response => {
      //console.log("my todos object look like:",response.body)
       return response.body
      
      })
    

    // console.log("my todos object look like:",res.body)
      
}

    
