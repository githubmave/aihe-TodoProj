import { RECIEVE_TODOS, UPDATE_TODO} from '../actions/todosAc'

//const initialState = []
const todosRdc = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_TODOS:
      return action.todoData

    case UPDATE_TODO:
       return state.map( todo => {
            if(todo.id == action.id) {
                return action.updatedTodo

            }
          return todo
       })


       default:
      return state
  }
}

export default todosRdc