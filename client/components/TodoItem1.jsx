
import React,{useImperativeHandle, useState} from 'react'
import { updateTodo } from '../../server/db/connection'
import {deleteTodo} from '../apis/api'



function TodoItem1 ({todoItem}) {

     
    // const [todoItem, setTodoItem] =useState(0)
    const [newTodo,setNewTodo] =useState({})
    const [todoNam, setTodoNam] =useState(todoItem.todoName)
    const [editable, setEditable] =useState(false)
    const [todoId, setTodoId] =useState(todoItem.id)

    const handleDelete =(id) =>{
        deleteTodo(id)
    }

    const handleSubmit =() =>{

        newTodo.todoName=todoNam,
        newTodo.id=todoId
        setNewTodo(newTodo)
           
        updateTodo(todoId,newTodo)

    }

    return(
           <>
               <div>              
                 <label className="new-todo" onDoubleClick={()=>setEditable(!editable)}>{todoNam}</label> 
                {/* <label onDoubleClick={setEditable(!editable)}>{todoNam}</label> ERROR: TO MANY RENDER!! */}
                <form onSubmit={handleSubmit}>
                    { editable && <input type="text"  className="new-todo" value={todoNam} onChange={(e) => setTodoNam(e.target.value)}/>}
                
                </form>

               </div> 
               <button className="destroy" onClick={e=>handleDelete(todoId)}></button>
           </>      
    )
}

export default TodoItem1