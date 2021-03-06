
import request from 'superagent'
import {addItem,deleteItem,updateItem} from '../actions/todosAc'


// const todosUrl = 'http://localhost:3000/api/v1/todos'
// const deleteUrl = 'http://localhost:3000/api/v1/todos/'

export function getTodos () {
  return request
    .get('/api/v1/todos')
    .then(response => response.body)     
}   

export function addTodo(newTodo,dispatch){
   return request
       .post('/api/v1/todos')
       .send({todoName: newTodo.todoName})
     //  .then( res=> dispatch(addItem(newTodo))) THIS LINE IS ALSO RIGHT
       .then(res => dispatch(addItem(res.body)))
    }

export function updateTodo(id, updatedTodo,dispatch){
        
       return request
          .patch('/api/v1/todos/'+id)
          .send({id: id, todoName: updatedTodo.todoName})
         // .then(res => dispatch(updateItem(id,updatedTodo)))
          .then(res =>dispatch(deleteItem(id,res.body)))
}

export function deleteTodo(id, dispatch) {
  // console.log("api/deleteTodo(id) id:",id)
    return request 
      .delete('/api/v1/todos/'+id)
      .then(res => dispatch(deleteItem(id)))

}
  
// export function addTodo (newTodo,){
//   console.log("api,li 21,recieve newTodo from AddTodo",newTodo)
//   return request
//     .post ('/api/v1/todos')
//     .send({todoName: newTodo.todoName,priority:newTodo.priority,completed:newTodo.completed})
//     .then((res) => {      
//         res.body
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




// export function deleteTodo(id){
//   //console.log("api ln 42 delete",id)
//    return request
//      .delete('/api/v1/todos/' + id) 
     
// }


// .delete(`/api/v1/todos/${id}`) 

  
