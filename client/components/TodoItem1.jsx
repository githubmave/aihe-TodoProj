
import React from 'react'
import { connect } from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'
 

class TodoItem1 extends React.Component{

         
         state={

    todoNam: this.props.todoItem1.todoName,
        id: this.props.todoItem1.id
             

         }

         handleDelete(e){
                e.preventDefault()

                deleteTodo(this.state.id,dispatch)
         }

    render(){
        return(
              <>
                  <div>
                       <label className="new-todo">{this.state.todoNam}</label>
                       <button className="destroy" onClick={handleDelete}></button>  
                  </div>

              </>


        )


    }
}

export default connect()(TodoItem1)