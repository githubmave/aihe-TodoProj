import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router,Route,Link} from 'react-router-dom'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import {deleteTodo} from '../apis/api'

import {fetchTodos} from '../actions/todosAc'

class App extends React.Component {
  state = { 
    todos: []
  
  }  
            
  componentDidMount () {
    
     this.props.dispatch(fetchTodos())
      
  }

  handleDelete(i){
      deleteTodo(i)
              
  }

  render () {
    
    return (
      
      
      <>
        <div ><button > delete  </button></div>
        <header className="header">
          <h1>My Todo List
          
          </h1>
          <AddTodo />
        </header>
         
        <section className="main">
          <TodoList />
{/*        
              <ul >
                  {this.props.todoArr.map((todoIt,i) =>
                                     
                  <li key={i} >{todoIt.todoName} 

                  
                    
                  </li>       

                  )}
              </ul>    */}
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
