import { GET_TODOS,ADD_TODO } from '../actions/todosAc'

const initialState = []

const todosRdc = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos

   
      case ADD_TODO :
        return [...state,action.addedTodo]
    default:
      return state
  }
}

export default todosRdc
