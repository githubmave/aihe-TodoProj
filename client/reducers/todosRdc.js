import { RECIEVE_TODOS,ADD_TODO,DELETE_TODO} from '../actions/todosAc'

const initialState = []

const todosRdc = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_TODOS:
      return action.todoData
    case ADD_TODO :
       return [...state,action.addedTodo]
    case DELETE_TODO:
       return state.filter( todo => {
                 if(todo.id !==action.id)
                 return todo
             }
        )



       default:
      return state
  }
}

export default todosRdc  