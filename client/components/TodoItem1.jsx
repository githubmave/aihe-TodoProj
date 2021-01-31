
import React,{useState} from 'react'
import {deleteTodo,updateTodo} from '../apis/api'


const TodoItem1 = ({todoItem}) =>{

     
    // const [todoItem, setTodoItem] =useState(0)
    const [todoNam, setTodoNam] =useState(todoItem.todoName)
    const [todoId,setTodoId] =useState(todoItem.id)
    const [todoItm,setTodoItm] =useState(todoItem)

    const handleDelete = () => {

            deleteTodo(todoId)
    }
    const handleSubmit = ()=>{
       todoItm.id =todoId
       todoItm.todoName =todoNam
        setTodoItm(todoItm)
        updateTodo(todoId,todoItm)
    }

    return(
          <> 
          <form onSubmit={handleSubmit}>
                <input type="text"  className="new-todo" value={todoNam} onChange={(e) => setTodoNam(e.target.value)}/>
         
         </form>
         <button className="destroy" onClick={handleDelete}></button>
         </>
                      
    )
}

export default TodoItem1