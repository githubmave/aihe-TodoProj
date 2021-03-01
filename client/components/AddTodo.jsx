import React,{useState} from 'react'
import {connect} from 'react-redux'


function AddTodo(){
     
     const [todo,setTodo]=useState('initials')
     
     const handleChange =(e)=>{
        e.preventDefault()

        setTodo(e.target.value)

     }

      return(
         <>
         <div >
 
          <input  className="new-todo"  type="text" value={todo}  onChange={handleChange}    />


         </div>
         </>
      )

}



export default connect()(AddTodo)