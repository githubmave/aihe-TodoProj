
//import {getTodos,addTodo, updateTodo,deleteTodo} from '../apis/api'

export const GET_TODOS = 'GET_TODOS'
export const UPDATE_TODO = 'UPDATE_TODO'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

// export const ADD_TODO = 'ADD_TODO'
// export const DELETE_TODO = 'DELETE_TODO'
// export const UPDATE_TODO = 'UPDATE_TODO'

// export const requestItems = () => {
 
//         return {
//            type: REQUEST_TODOS,

//         }
// } 
   
export const getTodoItems = (todos) => {

     return {
        type:GET_TODOS,
        todos

     }
}

export const addTodoItem = (addedTodo) => {

    return {
       type:ADD_TODO,
       addedTodo
         
    }
}


export const updateTodoItem = (id,updatedTodo) =>{

   return {
     type: UPDATE_TODO,
     updatedTodo,
     id

   }
       
}  
export const deleteTodoItem = (id) => {

    return {

        type: DELETE_TODO,
        id
    }
}
// export function getTodoItems(dispatch){
//     return getTodos()
//        .then(todos => dispatch(getItems(todos)))

// }
// export function addTodoItem(newTodo,dispatch){
//    return addTodo(newTodo)
//            .then(addedTodo => dispatch(addItem(addedTodo)))
     
// }
  
// export function deleteTodoItem(id,dispatch){
//    return deleteTodo(id)
//            .then( ()=> dispatch(deleteItem(id)))
// }

// export function updateTodoItem (id, updatedTodo){

//         return 
// }
// export const addItem = (newTodo) => {

//       return {
//         type: ADD_TODO,
//         newTodo
//       }
// }

// export const deleteItem = (id) => {

//          return {
//            type: DELETE_TODO,
//            id

//              }
// }

// export const updateItem = (id, updatedTodo) => {
//    return {

//        type: UPDATE_TODO,
//        updatedTodo,
//        id
//    }


// }


  
  
