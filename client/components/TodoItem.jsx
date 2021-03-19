import React,{useState} from 'react'
import {connect} from 'react-redux'
import {updateTodo,deleteTodo} from 'apis/api'


function TodoItem(props){

     const [editable, setEditable]=useState(false)
     const [todoNam,setTodoNam] =useState(props.todoItem.todoName)
     const [todoItm,setTodoItm]=useState(props.todoItem)

   function handleSubmit(){
      todoItm.todoName=todoNam;
      
      return updateTodo(,dispatch)
   }

   return(

    <> 
       {!editable &&
        <li className="new-todo" onDoubleClick={e => setEditable(true)}>{todoNam}
       
        <button className="destroy" onClick={}></button>
        </li>
       }

       {editable &&
        
         <form onSubmit={handleSubmit}>
          <li className="new-todo" type="text" onChange={e => setTodoNam(e.target.value)}>{todoName}
          <button className="new-todo"></button>
          </li>
         </form>

       }
       
      
    </>

   )

}

export default connect()(TodoItem)