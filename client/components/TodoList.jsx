import React from 'react'
import {connect} from 'react-redux'
//import TodoItem from './TodoItem'
import TodoItem1 from './TodoItem1'
// import TodoItem from './TodoItem'


function TodoList(props){
            
    return(

             <>
             <div className="todo-list">
               
                {/* {props.todoList.map((todo,i)=><TodoItem key={i}todoItem={todo} />)} */}

       {/* </div> {props.todolist.map((todo,i)=><TodoItem todoItm={todo}>)} */}
         {/* {props.todoList.map((todo,i)=><li key={i}><TodoItem todoItem={todo}/></li>)} */}

         {props.todoList.map((todo,i)=><li key={i}><TodoItem1  todoItem1={todo}/></li>)}
                
             </div>
             </>

    ) 
}



export default connect()(TodoList)