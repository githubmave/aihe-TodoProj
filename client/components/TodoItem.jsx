import React,{useState} from 'react'
import {connect} from 'react-redux'
import {updateTodo, deleteTodo} from '../apis/api'



function TodoItem(props){

     const [editable,setEditable] =useState(false)
     const [todoNam,setTodoNam] =useState(props.todoItem.todoName)
   //  const [todoItm, setTodoItm]=useState(props.todoItem)
    // const [id,setId]=useState(props.todoItem.id)
     const [todoItm,setTodoItm]=useState({})

     const handleSubmit = () =>{
      
      todoItm.id=props.todoItem.id
      todoItm.todoName=todoNam

      setTodoItm(todoItm)

         return  updateTodo(todoItm.id,todoItm ,props.dispatch)
     }

      
     
   return(

    <> 
       {!editable &&
         <label className="new-todo" onDoubleClick={e=>setEditable(true)}>{todoNam}</label>
       }   
          <form onSubmit={handleSubmit}>
              {editable &&
                <input className="new-todo" type="text" value={todoNam} onChange={e =>setTodoNam(e.target.value)}/>
              } 
          </form>
    </>

   )

}

export default connect()(TodoItem)