
import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {deleteTodo,updateTodo} from '../apis/api'


const TodoItem1 = (props) =>{

     
    // const [todoItem, setTodoItem] =useState(0)
    const [todoNam, setTodoNam] =useState(props.todoItem.todoName)
    const [todoId,setTodoId] =useState(props.todoItem.id)


    // function removeTodo(id){

    //     return deleteTodo(id,props.dispatch)
    // }
    
    // useEffect(()=>{

    //     removeTodo()
    // },[])

    const handleDelete =(e,id)=>{

        e.preventDefault()
       // removeTodo(id)
       deleteTodo(id,props.dispatch)
    }

    return(
           
        <>

         <input type="text"  className="new-todo" value={todoNam} onChange={(e) => setTodoNam(e.target.value)}/>
        
         <button className="destroy" onClick={e=>handleDelete(e,todoId)}></button>
        </>         
    )
}

//export default TodoItem1
export default connect()(TodoItem1)