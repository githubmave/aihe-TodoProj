import React,{useState} from 'react'
import {connect} from 'react-redux'



function TodoItem(props){

     const [editable,setEditable] =useState(false)
     const [todoNam,setTodoNam] =useState(props.todoItem.todoName)


   

   return(

    <> 
    
    
    </>

   )

}

export default connect()(TodoItem)