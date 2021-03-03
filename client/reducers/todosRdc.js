import { GET_TODOS } from '../actions/todosAc'

const initialState = []

const todosRdc = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos
    default:
      return state
  }
}

export default todosRdc
