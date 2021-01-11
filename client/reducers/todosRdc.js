import { RECIEVE_TODOS,ADD_TODO} from '../actions/todosAc'

const initialState = []

const todosRdc = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_TODOS:
      return action.todoData

    case ADD_TODO:
       return [...state, action.newTodo]


       default:
      return state
  }
}

export default todosRdc