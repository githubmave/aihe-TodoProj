export const RECIEVE_TODOS = 'RECIEVE_TODOS'
// export const ADD_TODO = 'ADD_TODO'
// export const DELETE_TODO = 'DELETE_TODO'
// export const UPDATE_TODO = 'UPDATE_TODO'

// export const requestItems = () => {

//         return {
//            type: REQUEST_TODOS,

//         }
// }

export const recieveItems = (todoData) => {

     return {
        type:RECIEVE_TODOS,
        todoData

     }
}
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

//          }
// }

// export const updateItem = (id, updatedTodo) => {
//    return {

//        type: UPDATE_TODO,
//        updatedTodo,
//        id
//    }


// }


  
  
