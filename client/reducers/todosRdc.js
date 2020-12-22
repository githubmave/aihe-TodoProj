import { RECIEVE_TODOS, UPDATE_TODO} from '../actions/todosAc'

const initialState = []

const todosRdc = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_TODOS:
      return action.todoData

    case UPDATE_TODO:
       return action.updatedTodo


       default:
      return state
  }
}

export default todosRdc