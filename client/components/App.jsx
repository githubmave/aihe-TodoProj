import React from 'react'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import {recieveItems} from '../actions/todosAc'
import {getTodos} from '../apis/api'



class App extends React.Component {
 // class App extends React.component{
  state = { 
    todoNm: ''
  
  }   
               
  componentDidMount () {

    getTodos()
     .then(todos => {
           this.props.dispatch(recieveItems(todos))
     })
       
       
  } 

  handleDelete = (e,id) => {
    e.preventDefault()
    deleteTodo(id)
    console.log("button is clicked")
  }

  // handleChange = (e) => {
  
  //   return this.setState({todoNm: e.target.value})
  // }
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   //push the new task into database
  //   console.log("handleSubmit click")
  //   addTodo(this.state)

  // }

  render () {
    
    return (
   
      <>

        <header className="header">
          <h1>Bernie Todo
          
          </h1>
          
          <AddTodo />
          {/* <form onSubmit={this.handleSubmit}>
              <input  className="new-todo" type="text" onChange={this.handleChange} value={this.state.todoNm}
                autoFocus={true} />

          </form> */}
          
        </header>
         
        <section className="main">
          <TodoList todoArr={this.props.todoArr}/>
       
              {/* <ul >
                  {this.props.todoArr.map((todoIt,i) =>
                                     
                  <li key={i} >{todoIt.todoName} 

                  <button onClick={(e) => this.handleDelete(e,todoIt.id)}>Delete</button>
                    
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
