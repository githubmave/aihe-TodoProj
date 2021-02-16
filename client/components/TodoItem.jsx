import React from 'react'
//import {updateItem,deleteTodoItem} from '../actions/todosAc'
import {deleteTodo,updateTodo} from '../apis/api'
import {connect} from 'react-redux'


class TodoItem extends React.Component{


  //    constructor(props) {
  //       super(props)
  //        this.state = {
  //              //todoName: '',
  //            // updatedTodoName: '',
  //            //  updatedTodo: '',
  //              updatedTodoName: props.todoItem.todoName,
  //              editable:false,
  //              id: props.todoItem.id
  //   }
  // }

            state ={

                todoName: this.props.todoItem.todoName,
                id: this.props.todoItem.id,
                editable: false
            }
   
    handleChange = (e) => {
      
      e.preventDefault()
      // return this.state
      console.log("TodoItem-handleChange-todoName:",e.target.value)

      return  this.setState({todoName: e.target.value})
    }
    
    handleDoubleClick = (e) => {
       e.preventDefault()
       this.setState({editable: true})
       console.log("double click to edit")

    }
       
        
    handleFormSubmit = (e) => {
           e.preventDefault()
          updateTodo(this.props.todoItem.id, this.state.todoName,this.props.dispatch)
           
          this.setState({editable: false})
    }
    
   handleDeleteClick = (e) => {
     // return deleteTodoItem(this.state.id,this.props.dispatch)
     e.preventDefault()
     return deleteTodo(this.state.id,this.props.dispatch)
   }

    render(){

      return ( 

            
              <>
              <div className="view">
                 {/* <input className="toggle" type="checkbox" onChange={this.handleChange}/> */}
                  {!this.state.editable && <label onDoubleClick={this.handleDoubleClick}>{this.props.todoItem.todoName}</label>}                         
                   
                  {this.state.editable && 
                     <form onSubmit={this.handleFormSubmit}>
                        <input className="new-todo"  value={this.state.todoName}  onChange={this.handleChange}/>

                     </form>              
                  }
              </div>
                <button className="destroy" onClick={this.handleDeleteClick}></button>
             </>

      )




    }
}
export default connect()(TodoItem)
//export default TodoItem