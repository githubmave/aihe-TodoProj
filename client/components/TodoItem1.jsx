
import React,{useState} from 'react'


const TodoItem1 = ({todoItem}) =>{

     
    // const [todoItem, setTodoItem] =useState(0)
    const [todoNam, setTodoNam] =useState(todoItem.todoName)

    return(
           
         <input type="text"  className="new-todo" value={todoNam} onChange={(e) => setTodoNam(e.target.value)}/>
                      
    )
}

export default TodoItem1