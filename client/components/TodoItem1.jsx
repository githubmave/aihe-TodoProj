import React,{useState} from 'react'
import {deleteTodo} from '../apis/api'
import {connect} from 'react-redux'
//import TodoItem from './TodoItem'


const TodoItem1 = (props) =>{

     
    // const [todoItem, setTodoItem] =useState(0)
    const [todoNam, setTodoNam] =useState(props.todoItem.todoName)
    const [todoId,setTodoId] =useState(props.todoItem.id)
    const [todoItm,setTodoItm] =useState(props.todoItem)

    const handleDelete = () => {

            deleteTodo(todoId,props.dispatch)
    }
    const handleSubmit = () =>{
        console.log("TodoItem1/handleSubmit: todoItm")
    //    todoItm.id =todoId
    //    todoItm.todoName =todoNam
    //     setTodoItm(todoItm)
    //     updateTodo(todoId,todoItm)
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
//export default TodoItem1
export default connect()(TodoItem1)