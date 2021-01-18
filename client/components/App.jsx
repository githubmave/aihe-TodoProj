import React from 'react'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import {fetchTodos} from '../actions/todosAc'
import { getTodos } from '../apis/api'


class App extends React.Component {

  // constructor(props){

  //     super(props)
  //     this.state = {

  //        todoArr: [],
  //        errorMessage: ''

  //     }
  //     this.fetchTodos = this.fetchTodos.bind(this)
  // }
    state = {
      todoArr: []
    }
     
  componentDidMount () {
     
      getTodos()
    
       .then(todos => this.handleGetTodos(todos))
    //  this.fetchTodos()
    // getTodos()
    //  .then(todos => this.setState({todoArr: todos}))
     
  }

  // fetchTodos () {

  //   return getTodos()
  //          .then( todos => {this.setState({todoArr: todos})})
  //          .catch( err => { this.setState({errorMessage: err.message})})
  // }

  handleGetTodos =(todos) => {
      //  const todoArr=[]
      //  todoArr=todos
      return this.setState({todoArr: todos})
     
  }
  handleDeleteClick = () => {

    return console.log("App/handleDeleteClick:click")
  }



  render () {
    console.log("App/state{todoArr:}: ",this.state.todoArr)
    return (
      <>
        <header className="header">
          <h1>Test Todo List</h1>
          <AddTodo />
        </header>
         
        {/* <section className="main"></section> */}
           {/* <ul >
              {this.props.todoArr.map((todoIt,i) =>{

              <li key={i} >{todoIt.todoName}  </li>       

              })}
           </ul>    */}
           

                <ul className="todo-list">
                {/* {this.state.todoArr( (todoItm,i)=>{return <li key={i}>{todoItm.todoName}</li>})} */}
                  {/* <li>{this.state.todoName}</li> */}
                  <div className="view">
                  {this.state.todoArr.map( (todo,i)  => <li className="new-todo" key = {i}>{todo.todoName}</li>)}

                  <button className="destroy" onClick={this.handleDeleteClick}></button>
                  </div>
                </ul>
              
           
          
          
        <footer className="footer"></footer>
      </>
    )
  }
}

export default App
// function mapStateToProps (globalState) {
//   return {
//     //todoArr is props belongs to "this"
//     todoArr: globalState.todosRdc
//   }
// }

// export default connect(mapStateToProps)(App)

