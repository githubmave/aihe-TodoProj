import { RECIEVE_TODOS,ADD_TODO,UPDATE_TODO } from '../actions/todosAc'

const initialState = []

const todosRdc = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_TODOS:
      return action.todoData

    case ADD_TODO:
      return [...state, action.newTodo]

    case UPDATE_TODO:
        return state.map( todo => {
          if( todo.id == action.id) 
          {return action.updatedTodo}  
          else {return todo}
        } )     

       default:
      return state
  }
}

export default todosRdc