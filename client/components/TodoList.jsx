import React from 'react'
import { connect } from 'react-redux'
//import TodoItem from './TodoItem'
import TodoItem1 from './TodoItem1'

 

// const TodoList = ({todoArr}) =>{

class TodoList extends React.Component{

   
    render(){
     return(

        <div >
        <ul className="todo-list">

     {/* {todoArr.map( (todoIt,i) => (<li key={i}>{todoIt.todoName}<button >Delete</button></li>  ))} */}

         {/* {this.props.todoArr.map( (todoIt,i)=><li className="new-todo" key = {i}> <TodoItem  todoItem={todoIt}/> </li> )} */}
        
         {this.props.todoArr.map( (todoIt,i)=><li className="new-todo" key = {i}> <TodoItem1 todoItem={todoIt}/> </li> )}

        </ul>


        </div>


     )  
   }

}

const mapStateToProps = (state)=>{
   return {
     todoArr: state.todosRdc
       
   }      
} 

export default connect(mapStateToProps)(TodoList)