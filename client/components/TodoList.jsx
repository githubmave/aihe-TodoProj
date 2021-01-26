
import React from 'react'
import { connect } from 'react-redux'
//import TodoItem from './TodoItem'
import {Link} from 'react-router-dom'
import {deleteTodo, updateTodo} from '../apis/api'



class TodoList extends React.Component {
            state = {

                   todoName: '',
                   todoId: 1,
                   editable: false
            }
            
   
   handleDelete = (e,id) => {

     e.preventDefault()
     deleteTodo(id,this.props.dispatch)

   }

   handleDoubleClick = (e) => {

      return this.setState({editable: true, todoId: e.target.value })
      
             
   }
   handleChange = (e) => {

        return this.setState({todoName: e.target.value, todoId: e.target.id})
   }

   handleSubmit = (e) => {

       updateTodo(this.state.todoId, this.state, this.props.dispatch)
   }
   render(){

          return(

              <>
                {/* <div className="todo-list">
                   {this.props.todoArr.map( (todo,i)=> {  return <li className="new-todo" key={i} >
                        { !this.state.editable && <Link to={`/todos/${todo.id}`} onDoubleClick={this.handleDoubleClick}>{todo.todoName}</Link> }
                        
                      {this.state.editable && <form onSubmite={this.handleSubmit}>
                              <input type="text"  id={this.state.todoId} value={this.state.todoName} onChange={this.handleChange} />
                        
                         </form>} 
                  
                        
                        
                 </div> */}
          </>
          )     
   }
}

//export default TodoList
export default connect()(TodoList)

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