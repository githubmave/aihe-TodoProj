//import { response } from 'express'
import request from 'superagent'


const todosUrl = 'http://localhost:3000/api/v1/todos'
const deleteUrl = 'http://localhost:3000/api/v1/todos/'

export function deleteTodo(id){

   return request
     .delete('http://localhost:3000/api/v1/todos/'+id) 
     
         
  }




export function getTodos () {
  return request
    .get(todosUrl)
    .then(response => {
      //console.log("my todos object look like:",response.body)
       return response.body
      
      })     
}  

// export function getTodo () {
//   return request
//     .get(`/api/v1/todos/${id}`)
//     .then(response => {
//       //console.log("my todos object look like:",response.body)
//        return response.body
      
//       })    
// }  
  
    
