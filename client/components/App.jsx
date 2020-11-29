import React from 'react'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import {deleteTodo,addTodo} from '../apis/api'

import {fetchTodos} from '../actions/todosAc'

class App extends React.Component {
  state = { 
    todoNm: ''
  
  }  
            
  componentDidMount () {
    
     this.props.dispatch(fetchTodos())
      
  }

  handleDelete = (e,id) => {
    e.preventDefault()
    console.log("button is clicked")
    
    deleteTodo(id,this.props.dispatch)

  }

  handleChange = (e) => {
  
    return this.setState({todoNm: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    //push the new task into database
    console.log("handleSubmit click")
    addTodo(this.state)



  }

  render () {
    
    return (
      
      
      <>

        <header className="header">
          <h1>My Todo List
          
          </h1>
          
          {/* <AddTodo /> */}
          <form onSubmit={this.handleSubmit}>
              <input  className="new-todo" type="text" onChange={this.handleChange} value={this.state.todoNm}
                autoFocus={true} />

          </form>
          
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
