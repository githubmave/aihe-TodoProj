import React from 'react'
import { connect } from 'react-redux'
import TodoItemA from './TodoItemA'




//const TodoList = (props) =>{
const TodoList = ({todoArr}) =>(

     <>
   
        
        <div >
        <ul className="todo-list">

     {/* {props.todoArr.map( (todoIt,i) => (<li key={i}>{todoIt.todoName}<button >Delete</button></li>  ))} */}
         {todoArr.map( (todoItem,i)=> <li key={i}><TodoItemA todoItem={todoItem} /></li>)}
        </ul>


        </div>
       </>

    // )  
)

//}
//export default TodoList

export default connect()(TodoList)
//export default connect()(TodoList)
// const mapStateToProps = (state)=>{
//    return {
//      todoArr: state.todosRdc
       
//    }

      
// } 

// export default connect(mapStateToProps)(TodoList)