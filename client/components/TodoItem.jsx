import React,{useState} from 'react'
import {connect} from 'react-redux'


function TodoItem(props){

     const [editable, setEditable]=useState(false)
     const [todoNam,setTodoNam] =useState(props.todoItem.todoName)



   return(

    <> 
       {!editable &&
        <li className="new-todo" onDoubleClick={e => setEditable(true)}>{todoNam}
       
        <button className="destroy" onClick={}></button>
        </li>
       }

       {editable &&
          <li className="new-todo" type="text" onChange={e => setTodoNam(e.target.value)}>{todoName}
          <button className="new-todo"></button>
          </li>

       }
      
    </>

   )

}

export default connect()(TodoItem)