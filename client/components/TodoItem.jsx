import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../apis/api'



class TodoItem extends React.Component{
     handleDelete =(e,id)=> {
         
      e.preventDefault()
      deleteTodo(id, this.props.dispatch)
        
     }

       render(){


        return(

            <>
                  <div>
                      <label className="new-todo">{this.props.todoItem.todoName}<button onClick={e => this.handleDelete(e,this.props.todoItem.id)}>Delete</button></label>

                  </div>
            </>
        )

       }

}

export default connect()(TodoItem)
//export default TodoItem