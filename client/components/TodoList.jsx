
import React from 'react'
import { connect } from 'react-redux'
//import TodoItem from './TodoItem'
import {Link} from 'react-router-dom'
import {deleteTodo, updateTodo} from '../apis/api'



class TodoList extends React.Component {
            state = {

                   todoName: '',
                   todoList: [],
                   todoId: 1,
                   editable: false
            }
            
   
   handleDelete = (e,id) => {

     e.preventDefault()
     deleteTodo(id,this.props.dispatch)

   }

   handleDoubleClick = (e) => {

      this.setState({editable: true, todoList: this.props.todoArr})         
   }
   handleChange = (e) => {

        return this.setState({todoName: e.target.value})
   }

   handleSubmit = (e) => {

       updateTodo(this.state.todoId, this.state, this.props.dispatch)
   }

   render(){

          return (

              <>
              <div className="todo-list">
                {this.props.todoArr.map( (todo,i)=> <li className="new-todo" key={i} onDoubleClick={this.handleDoubleClick}><Link to={`/todos/${todo.id}`}>{todo.todoName}</Link><button className="destroy" onClick={e =>this.handleDelete(e,todo.id)}></button></li>)}
                {/* {this.state.editable && this.state.todoList.map( (todoItem,i)=><li key={i}><input className="new-todo" type="text" value={todoItem.todoName} onChange={this.handleChange}/><button className="destroy" onClick={e => this.handleDelete(e,todoItem.id)}></button></li>)} */}
              </div>
             </>
          )     
   

   }
}
//export default TodoList

function mapStateToProps (globalState) {
  return {
   todoArr: globalState.todosRdc
  }
}
export default connect(mapStateToProps)(TodoList)

//const TodoList = (props) =>{
//const TodoList = ({todoArr}) =>(

     
   
        
      //   <div >
      //   <ul className="todo-list">

 
            
//)

//}
//export default TodoList
//export default connect()(TodoList)

// const mapStateToProps = (state)=>{
//    return {
//      todoArr: state.todosRdc
       
//    }

      
// } 

// export default connect(mapStateToProps)(TodoList)