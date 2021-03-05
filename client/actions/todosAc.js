



export const GET_TODOS='GET_TODOS'
export const ADD_TODO = 'ADD_TODO'

export const getTodoItems = (todos) =>{
       
        return{
           type: GET_TODOS,
           todos: todos

        }
}

export const addTodoItem = (newTodoItem) =>{

        return {
          type: ADD_TODO,
          newTodoItem

        }
}