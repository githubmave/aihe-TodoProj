

export const GET_TODOS='GET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'

export const getTodoItems = (todos) =>{
       
        return{
           type: GET_TODOS,
           todos: todos

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

              type:UPDATE_TODO,
              id,
              updatedTodo
      }
}