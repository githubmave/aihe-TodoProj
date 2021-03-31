import { GET_TODOS,ADD_TODO,UPDATE_TODO ,DELETE_TODO} from '../actions/todosAc'

const initialState = []

const todosRdc = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos

   
      case ADD_TODO :
        return [...state,action.addedTodo]

      case UPDATE_TODO:
         return state.map(todo =>{ if(todo.id==action.id) return todo=action.updatedTodo})

      case DELETE_TODO:
         return state.filter(todo =>todo.id!=action.id)
    default:
      return state
  }
}

export default todosRdc
