import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './TodoItem'


function TodoList(props){
            

    return(


             <>
             <div className="todo-list">
               <li>
                {props.todoList.map((todo,i)=><TodoItem key={i}todoItem={todo} />)}
                </li>
             </div>
             </>

    )
}



export default connect()(TodoList)