import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './TodoItem'


function TodoList(props){
            

    return(


             <>
             {props.todoList.map((todo,i)=><TodoItem todoItem={todo} />)}

             </>

    )
}



export default connect()(TodoList)