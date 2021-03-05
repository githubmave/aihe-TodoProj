import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../apis/api'


//function AddTodo(props){
const AddTodo = (props) =>{
     
      return(
            const [todoNam,setTodoNam]=useState('')
     const [todoItm,setTodoItm]=useState({})
     
   

     const handleSubmit =(e)=>{

           console.log("AddTodo/handleSubmit: todoItm.todoName",todoItm.todoName)
           todoItm.todoName=todoNam
           setTodoItm(todoItm)

           addTodo(props.dispatch,todoItm)
     }
      return(
         <>
         <div >
          <form onSubmit={handleSubmit}>
               <input  className="new-todo"  type="text" value={todoNam}  onChange={e=>setTodoNam(e.target.value)}    />
          </form>

         </div>
         </>
      )

}



export default connect()(AddTodo)