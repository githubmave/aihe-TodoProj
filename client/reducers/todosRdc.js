import { GET_TODOS, UPDATE_TODO,ADD_TODO,DELETE_TODO} from '../actions/todosAc'

//const initialState = []
const todosRdc = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos

    case ADD_TODO:
     // let {id, priority, todoName,completed} =action.newTodo
     // return action.newTodo
   // return [...state, {id,priority,todoName,completed}]
    return [...state,action.addedTodo]

    case UPDATE_TODO:
       return state.map( todo => {
            if(todo.id == action.id) {
                return action.updatedTodo

            }
          return todo
       })
     case DELETE_TODO:
       return state.filter(todo =>{
         if(!(todo.id == action.id)){
              return todo
         }
                  
        } )

       default:
      return state
  }
}

export default todosRdc        