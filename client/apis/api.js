
import request from 'superagent'

import {addItem,deleteItem,updateItem,receiveItems} from '../actions/todosAc'


// const todosUrl = 'http://localhost:3000/api/v1/todos'
// const deleteUrl = 'http://localhost:3000/api/v1/todos/'

// export function getTodos () {
//   return request
//     .get('/api/v1/todos')
//     .then(response => response.body)     
// }   
export function getTodos(dispatch){

     return request
           .get('/api/v1/todos')
           .then(reponds => dispatch(receiveItems(reponds.body)))
}

// export function addTodo (newTodo){
//   console.log("api,li 21,recieve newTodo from AddTodo",newTodo)
//   return request
//     .post ('/api/v1/todos')
//     .send({todoName: newTodo.todoName,priority:newTodo.priority,completed:newTodo.completed})
//     .then((res) => {      
//         res.body
//     })
// }

export function addTodo(newTodo,dispatch){
 
        return request
             .post('/api/v1/todos')
             .send({todoName:newTodo.todoName})
             .then( res=>{dispatch(addItem(res.body))})

}

export function updateTodo(updatedId,updatedTodo,dispatch){
     console.log("api/updateTodo(id,todo)",updatedId,updatedTodo)
     return request
       .patch('/api/v1/todos/'+updatedId)
       .send({id:updatedId,todoName:updatedTodo.todoName})
       .then(responds =>dispatch(updateItem(updatedId,responds.body)))
}

// export function updateTodo(id, updatedTodo,dispatch){
       
//   return request
//        .patch(`/api/v1/todos/${id}`)
//        .send({todoName: updatedTodo})
//        .then( res => {
//             dispatch(updateItem(id, res.body))

//        })
// }




export function deleteTodo(id,dispatch){

   return request
     .delete(`/api/v1/todos/${id}`) 
     .then(res => {
          dispatch(deleteItem(id))

     })
     .catch(error => console.log(error))
}

  
