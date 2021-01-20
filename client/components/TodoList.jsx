import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'




//const TodoList = (props) =>{
const TodoList = ({todoArr}) =>(

     <>
   
        
        <div >
        <ul className="todo-list">

     {/* {props.todoArr.map( (todoIt,i) => (<li key={i}>{todoIt.todoName}<button >Delete</button></li>  ))} */}
         {todoArr.map( (todoItem,i)=> <li key={i}><TodoItem todoItem={todoItem} /></li>)}
        </ul>


        </div>
       </>

    // )  
)

//}
export default TodoList
//export default connect()(TodoList)

// const mapStateToProps = (state)=>{
//    return {
//      todoArr: state.todosRdc
       
//    }

      
// } 

// export default connect(mapStateToProps)(TodoList)