import React,{useState} from 'react'
import {connect} from 'react-redux'
import {updateTodo, deleteTodo} from '../apis/api'



function TodoItem(props){

     const [editable,setEditable] =useState(false)
     const [todoNam,setTodoNam] =useState(props.todoItem.todoName)
     const [todoItm, setTodoItm]=useState(props.todoItem)


     const handleSubmit = () =>{
      id=todoItm.id
      todoItm.todoName=todoNam

         return  updateTodo(id,todoItm,props.dispatch)
     }

      
     
   return(

    <> 
         <form onSubmit={handleSubmit}>
            {!editable && 
                  <input type="text" className="new-todo" value={todoNam} onDoubleClick={e => setEditable(true)}/>
            }
            {editable && 
                  <input type="text" className="new-todo" value={todoNam} onChange={e =>setTodoNam(e.target.value)}/>
            }

     </form>
    </>

   )

}

export default connect()(TodoItem)