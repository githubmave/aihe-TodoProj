                                                                                
                                                                                

import request from 'superagent'
//import {getItems,updateItem,addTodoItem} from '../actions/todosAc'
  

// const todosUrl = 'http://localhost:3000/api/v1/todos'
// const deleteUrl = 'http://localhost:3000/api/v1/todos/'

// export function getTodos () {
//   return request
//     .get('/api/v1/todos')
//     .then(response => response.body)     
// }  
// export function getTodos(dispatch) {

//   return request
//     .get('/api/v1/todos')
//     .then(responds => dispatch(getItems(responds.body)))

// }
export function getTodos(){
    return request 
           .get('/api/v1/todos')
           .then( res =>res.body)
}

export function addTodo(newTodo){

    return request
            .post('/api/v1/todos')
            .send({todoName: newTodo.todoName})
            .then(res => res.body)
}
export function deleteTodo(id){
    return request
           .delete('/api/v1/todos/'+id)
           .then( res=>res.body )
}
export function updateTodo(id,updatedTodo){
    console.log("api/updateTodo(id,updatedTodo): id", id)
     return request
         .patch('/api/v1/todos/'+id)
         .send({id:id,todoName:updatedTodo.todoName})
         .then(response => response.body) 
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
//  export function addTodo (newTodo,dispatch){
//   console.log("api,li 21,recieve newTodo from AddTodo",newTodo)
//   return request
//     .post ('/api/v1/todos')
//     .send({todoName: newTodo.todoName})
//     .then((res) => {      
//         dispatch(addTodoItem(res.body))
//     })
// }

// export function updateTodo(id, updatedTodo,dispatch){
       
//   return request
//        .patch(`/api/v1/todos/${id}`)
//        .send({todoName: updatedTodo})
//        .then( res => {
//             dispatch(updateItem(id, res.body))
    
//        })
// }

// export function updateTodo(id,updatedTodoName,dispatch){
//   console.log("TodoItem call api, updatedTodoName: ",updatedTodoName)
//   return request.patch(`/api/v1/todos/${id}`)
//                 .send({todoName:updatedTodoName})
//                // .then( responds =>dispatch(updateItem(id,responds.body)))
//                 .then((res) =>{ dispatch(updateItem(id,res.body))

//                 })
// }


// export function deleteTodo(id,dispatch){

//    return request
//      .delete(`/api/v1/todos/${id}`) 
//      .then(res => {
//           dispatch(deleteItem(id))

//      })
//      .catch(error => console.log(error))
// }

  
