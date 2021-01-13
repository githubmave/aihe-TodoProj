import { RECIEVE_TODOS,ADD_TODO,UPDATE_TODO,DELETE_TODO } from '../actions/todosAc'

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
        
    case DELETE_TODO:
        return state.filter( todo => {return todo.id != action.id})

       default:
      return state
  }
}

export default todosRdc