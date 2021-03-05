import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../apis/api'


function AddTodo(){
     
     const [todoNam,setTodoNam]=useState('initials')
     
     const handleChange =(e)=>{
        e.preventDefault()

        setTodo(e.target.value)

     }

     const handleSubmit =(e)=>{

           addTodo(dispatch,)
     }
      return(
         <>
         <div >
          <form onSubmit={handleSubmit}>
               <input  className="new-todo"  type="text" value={todoNam}  onChange={handleChange}    />
          </form>

         </div>
         </>
      )

}



export default connect()(AddTodo)