import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../apis/api'

import AddTodo from './AddTodo'
import TodoList from './TodoList'


class App extends React.Component {

    
     
  componentDidMount () {
     
      getTodos(this.props.dispatch)
      // .then(todos=> this.setState({todoArr: todos}))
    
      
     
  }
  

  render () {
  

  
   
    return (
      <>
        <header className="header">
          <h1> Rebuild Todos </h1>
        
        </header>
         
       
           

                <ul className="todo-list">
            
                  <AddTodo />
                  <TodoList todoList={this.props.todoArr}/>
                  {/* <div className="view">
               

                {this.props.todoArr.map((todo,i)=><li className="new-todo" key={i}>{todo.todoName}<button className="destroy"></button></li> )}

                  
                  </div> */}
                </ul>
              
           
          
          
        <footer className="footer"></footer>
      </>
    )
  }
}

function mapStateToProps(state){
         return{todoArr: state.todosRdc}

}

export default connect(mapStateToProps)(App)




