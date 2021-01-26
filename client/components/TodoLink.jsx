
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {deleteTodo,updateTodo} from '../apis/api'



class TodoLink extends React.Component{
           state ={
            todoName: this.props.todoItem.todoName,
            todoId: this.props.todoItem.id,
            editable: false

           }

handleDelete =(e) => {
      e.preventDefault()
      deleteTodo(this.state.todoId, this.props.dispatch)

}
handleDoubleClick = (e) => {
    return this.setState({editable: true})
}
handleChange =(e)=> {
 return this.setState({todoName: e.target.value})

}
handleSubmit = () => {

    updateTodo(this.state.todoId, this.state, this.props.dispatch)
   // this.setState({editable: false})
}
     render(){

         return(
             <>
              <div>
                   
                    <li >
                       <form onSubmit={this.handleSubmit}> 
                                {!this.state.editable && <Link to={`/todos/${this.state.todoId}`} className="new-todo" onDoubleClick={this.handleDoubleClick}>{this.state.todoName}</Link>}
                            
                            
                                { this.state.editable && <input className="new-todo" type="text" value={this.state.todoName} onChange={this.handleChange}/>}
                        </form>
                       
                        <button className="destroy" onClick={this.handleDelete}></button>
                    </li>
               </div>
             </>
         )

     }
    
}

export default connect()(TodoLink)