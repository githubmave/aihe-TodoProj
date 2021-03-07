import React from 'react'
import {connect} from 'react-redux'

function TodoItem(props){

   return(

    <>
        <li className="new-todo">{props.todoItem.todoName}
        <button className="destroy"></button>
        </li>
    </>

   )

}

export default connect()(TodoItem)