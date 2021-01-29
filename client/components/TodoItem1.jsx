
import React,{useState} from 'react'


const TodoItem1 = ({todoItem}) =>{

     
    // const [todoItem, setTodoItem] =useState(0)
    const [todoNam, setTodoNam] =useState(todoItem.todoName)
    const [editable, setEditable] =useState(false)
    const [todoId, setTodoId] =useState(todoItem.id)

    return(
           <>
                <label className="new-todo" onDoubleClick={()=>setEditable(!editable)}>{todoNam}</label> 
                {/* <label onDoubleClick={setEditable(!editable)}>{todoNam}</label> ERROR: TO MANY RENDER!! */}
          { editable && <input type="text"  className="new-todo" value={todoNam} onChange={(e) => setTodoNam(e.target.value)}/>}
           </>      
    )
}

export default TodoItem1