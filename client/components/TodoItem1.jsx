import e from 'express'
import React from 'react'
import { connect } from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'
 

class TodoItem1 extends React.Component{

         
         state={

            todoItm = this.props.todoItem1
          
             

         }

    render(){
        return(
              <>
                  <div>
                       <label className="new-todo">{this.state.todoNam}</label>
                       <button className="destroy" onClick={handleClick}></button>  
                  </div>

              </>


        )


    }
}

export default connect()(TodoItem1)