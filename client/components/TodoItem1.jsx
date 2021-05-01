
import React from 'react'
import { connect } from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'
 

class TodoItem1 extends React.Component{

         
         state={

        todoNam: this.props.todoItem1.todoName,
        id: this.props.todoItem1.id
             

         }

         handleDelete =(e)=> {
                e.preventDefault()

               return deleteTodo(this.state.id,this.props.dispatch)
         }

    render(){
        return(
              <>
                <div>
                    <label className="new-todo">{this.state.todoNam}</label>
                    <button className="destroy" onClick={this.handleDelete}></button>  
                </div>

              </>


        )


    }
}

export default connect()(TodoItem1)