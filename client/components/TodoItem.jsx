import React,{useState} from 'react'
import {connect} from 'react-redux'

function TodoItem(props){

   return(

    <>
        <li className="new-todo" key={props.todoItem.id}>{props.todoItem.todoName}</li>
    </>

   )

}

export default connect()(TodoItem)