import React from 'react'
import { connect } from 'react-redux'
import {getTodos} from '../apis/api'
import {receiveItems} from '../actions/todosAc'
import TodoItem from './TodoItem'



// const TodoList = ({todoArr}) =>{  Mave Comment: todoArr is global state , is not a props, SO , IT IS A WRONG USAGE 

  
//      return(

//         <div >
//         <ul >

//      {/* {todoArr.map( (todoIt,i) => (<li key={i}>{todoIt.todoName}<button >Delete</button></li>  ))} */}

//         {todoArr.map( (todoItem,i)=>{return <TodoItem todoItem = {todoItem} todoId={todoItem.id}/>} )}
//         </ul>


//         </div>


//      )  


// }

class TodoList extends React.Component{

          

           componentDidMount(){
              getTodos()
              .then( todos=> this.props.dispatch(receiveItems(todos)))           

           }

     render(){
      
        return (

              <div>

                  <ul>
                     {this.props.todoArr.map( (todoItem,i)=>{return <TodoItem  todoItem={todoItem} todoId={todoItem.id} />})}


                  </ul>

              </div>


        )

          

     }
}

const mapStateToProps = (state)=>{
   return {
     todoArr: state.todosRdc
       
   }

      
} 

export default connect(mapStateToProps)(TodoList)