import React from 'react'
import {connect} from 'react-redux'
//import TodoItem from './TodoItem'
import TodoItem1 from './TodoItem1'


function TodoList(props){
            

    return(


             <>
             <div className="todo-list">
               
                {/* {props.todoList.map((todo,i)=><TodoItem key={i}todoItem={todo} />)} */}

    {props.todoList.map( (i,todoItm)=><li key={i}> <TodoItem1 TodoItem1={todoItm}/></li>)}
                
             </div>
             </>

    )
}



export default connect()(TodoList)