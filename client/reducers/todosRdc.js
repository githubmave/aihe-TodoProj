import { SET_TODOS } from '../actions/todosAc'
//import { TEST } from '../actions/todosAc'

//const initialState = [{"todoName":"sing"},{"todoName":"go swimming"}]
//const initialState = [{"todoName":"sing"},{"todoName":"go swimming"}]
const initialState = []

const todosRdc = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todoData


    // case 'TEST':
    //   return [{"todoName":"sing"},{"todoName":"go swimming"}]
    default:
      return state
  }
}

export default todosRdc