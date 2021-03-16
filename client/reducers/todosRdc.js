import { GET_TODOS,ADD_TODO,UPDATE_TODO } from '../actions/todosAc'

const initialState = []

const todosRdc = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos

   
      case ADD_TODO :
        return [...state,action.addedTodo]

      case UPDATE_TODO:
         return state.map(todo =>{ if(todo.id==action.id) return todo=action.updatedTodo})
    default:
      return state
  }
}

export default todosRdc
