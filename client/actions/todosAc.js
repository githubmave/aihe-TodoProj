import request from 'superagent'
import {getTodos} from '../apis/api'


export const SET_TODOS = 'SET_TODOS'
//export const TEST = 'TEST'

export function setTodos (todoData) {
    console.log("It is from todoAc:setTodos",todoData)
    return {
      type: SET_TODOS,
      todoData
      // type: TEST,
      // test: {"results" :[{"todoName":"sing"},{"todoName":"go swimming"}]
            
            }
      //console.log("from todosAc, it is todo list:",todoData)

     
    }
  
  
  export function fetchTodos () {
  
    return dispatch => {
      return getTodos()
        .then(todoData => {
          console.log("it is from todoAC:",todoData)
          dispatch(setTodos(todoData))
          return null
        })
    }
  }