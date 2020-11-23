import request from 'superagent'
import {getTodos} from '../apis/api'


export const SET_TODOS = 'SET_TODOS'

export function setTodos (todoData) {
    return {
      type: SET_TODOS,
      todoData
    }
  }
  
  export function fetchTodos () {
  
    return dispatch => {
      return getTodos()
        .then(todoData => {
          dispatch(setTodos(todoData))
          return null
        })
    }
  }