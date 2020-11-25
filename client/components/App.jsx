import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router,Route,Link} from 'react-router-dom'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import {deleteTodo} from '../apis/api'

import {fetchTodos} from '../actions/todosAc'

class App extends React.Component {
  state = { 
    todo: ''
  
  }  
            
  componentDidMount () {
    
     this.props.dispatch(fetchTodos())
      
  }

  handleDelete = (e,id) => {
    e.preventDefault()
    console.log("button is clicked")
    
    deleteTodo(id)

  }

  render () {
    
    return (
      
      
      <>

        <header className="header">
          <h1>My Todo List
          
          </h1>
          <AddTodo />
        </header>
         
        <section className="main">
          {/* <TodoList /> */}
       
              <ul >
                  {this.props.todoArr.map((todoIt,i) =>
                                     
                  <li key={i} >{todoIt.todoName} 

                  <button onClick={(e) => this.handleDelete(e,todoIt.id)}>Delete</button>
                    
                  </li>       

                  )}
              </ul>   

              {/* <form >

                  <input type="submit" value="Add Todo" />
              </form> */}

          </section>
       
          
        <footer className="footer"></footer>
      </>
    )
  }
}

//export default App
function mapStateToProps (globalState) {
  return {
   
    todoArr: globalState.todosRdc

    
  }
}

export default connect(mapStateToProps)(App)
