import { RECIEVE_TODOS} from '../actions/todosAc'

const initialState = []

const todosRdc = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_TODOS:
      return action.todoData


       default:
      return state
  }
}

export default todosRdc