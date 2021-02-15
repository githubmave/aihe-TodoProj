import React from 'react'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
//import {getTodoItems} from '../actions/todosAc'   
import {getTodos} from '../apis/api'


//import {recieveItems} from '../actions/todosAc'

class App extends React.Component {
  state = { 
    todoName: ''
  
  }  
               
  componentDidMount () {

    // getTodos()
    //  .then(todos => {
    //        this.props.dispatch(recieveItems(todos))
    //  })
    //getTodos(this.props.dispatch)
      
     getTodos(this.props.dispatch)
       
  }

  // handleDelete = (e,id) => {
  //   e.preventDefault()
  //   console.log("button is clicked")
    
  //   deleteTodo(id)

  // }

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
          <h1>what to do next
          
          </h1>
          
          <AddTodo />
          {/* <form onSubmit={this.handleSubmit}>
              <input  className="new-todo" type="text" onChange={this.handleChange} value={this.state.todoNm}
                autoFocus={true} />

          </form> */}
          
        </header>
         
        <section className="main">
          <TodoList />
       
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
