
export const GET_TODOS = 'GET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
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
 
export const addTodoItem = (newItem) => {
   return {

      type: ADD_TODO,
      addedTodo: newItem
   }
}

export const updateTodoItem = (id, updatedTodo) => {

   return {
 
      type: UPDATE_TODO,
      newTodo: updatedTodo,
      id: id
   }
}
export const deleteTodoItem = (id) => {
    return {
       type: DELETE_TODO,
       id: id
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


  
  
