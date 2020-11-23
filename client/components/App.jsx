import React from 'react'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import {fetchTodos} from '../actions/todosAc'

class App extends React.Component {
  //state = { todos: []}

     
  componentDidMount () {
     //getTodos()

     this.props.dispatch(fetchTodos())
     
  }

  render () {
    return (
      <>
        <header className="header">
          <h1>My Todo List</h1>
          <AddTodo />
        </header>
         
        <section className="main"></section>
           <ul >
              {this.props.todoArr.map((todoIt,i) =>{

              <li key={i} >{todoIt.todoName}  </li>       

              })}
           </ul>   
          
        <footer className="footer"></footer>
      </>
    )
  }
}

//export default App
function mapStateToProps (globalState) {
  return {
    //todoArr is props belongs to "this"
    todoArr: globalState.todosRdc
  }
}

export default connect(mapStateToProps)(App)

