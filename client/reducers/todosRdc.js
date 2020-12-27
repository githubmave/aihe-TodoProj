import { RECIEVE_TODOS, UPDATE_TODO,ADD_TODO} from '../actions/todosAc'

//const initialState = []
const todosRdc = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_TODOS:
      return action.todoData

    case ADD_TODO:
      let {id, priority, todoName,completed} =action.newTodo
     // return action.newTodo
     return [...state, {id,priority,todoName,completed}]

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