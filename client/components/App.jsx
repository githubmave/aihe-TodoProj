import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../apis/api'

import AddTodo from './AddTodo'


class App extends React.Component {

 
     
  componentDidMount () {
     
      getTodos(this.props.dispatch)
    
      
     
  }
  

  render () {
    const {todos}=this.props

  
   
    return (
      <>
        <header className="header">
          <h1> Rebuild Todos </h1>
        
        </header>
         
       
           

                <ul className="todo-list">
                {/* {this.state.todoArr( (todoItm,i)=>{return <li key={i}>{todoItm.todoName}</li>})} */}
                  {/* <li>{this.state.todoName}</li> */}
                  <AddTodo />
                  <div className="view">
                  
                  {/* {todos.map( (todo,i)  => <li className="new-todo" key = {i}>{todo.todoName}</li>)} */}

                  {todos.map((todo,i) =><li key={i}>{todo.todoName}</li>)}

                  <button className="destroy" onClick={this.handleDeleteClick}></button>
                  </div>
                </ul>
              
           
          
          
        <footer className="footer"></footer>
      </>
    )
  }
}

function mapStateToProps ({todos}) {

  return { todos}
     
        
  
}

export default connect(mapStateToProps)(App)



// function mapStateToProps (globalState) {
//   return {
//     //todoArr is props belongs to "this"
//     todoArr: globalState.todosRdc
//   }
// }

// export default connect(mapStateToProps)(App)

