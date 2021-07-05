import React,{useState} from 'react'
import {connect} from 'react-redux'
import {updateTodo, deleteTodo} from '../apis/api'



function TodoItem(props){

     const [editable,setEditable] =useState(false)
     const [todoNam,setTodoNam] =useState(props.todoItem.todoName)
     const [todoId,setTodoId]=useState(props.todoItem.id)
   //  const [todoItm, setTodoItm]=useState(props.todoItem)
    // const [id,setId]=useState(props.todoItem.id)
     const [todoItm,setTodoItm]=useState({})

     const handleSubmit = (e) =>{
      e.preventDefault()
      todoItm.id=props.todoItem.id
      todoItm.todoName=todoNam
      console.log("TodoItem/handleSubmit: todoItm.todoNam",todoItm.todoNam)
      setTodoItm(todoItm)

         return  updateTodo(todoItm.id,todoItm ,props.dispatch)
         
     }

    const handleDelete =(e,id) =>{
         
          e.preventDefault()
          setTodoId(id)
          deleteTodo(todoId,props.dispatch)

    }

   const handleChange =(e)=> {
       e.preventDefault()
       return setTodoNam(e.target.value)

   }
     
   return(

    <> 
       
         <input    className="new-todo" type="text" value={todoNam} onChange={handleChange} />
         <button className="destroy" onClick={e=>handleDelete(e,todoId)}></button>
   
       
    </>
    

   )

}

export default connect()(TodoItem)