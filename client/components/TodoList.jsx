import React from 'react'
import { connect } from 'react-redux'



const TodoList = ({todoArr}) =>{

  
     return(

        <div >
        <ul >

     {todoArr.map( (todoIt,i) => (<li key={i}>{todoIt.todoName}<button >Delete</button></li>  ))}
        </ul>


        </div>


     )  


}

const mapStateToProps = (state)=>{
   return {
     todoArr: state.todosRdc
       
   }

      
} 

export default connect(mapStateToProps)(TodoList)