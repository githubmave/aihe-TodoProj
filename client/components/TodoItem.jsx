import React from 'react'
import {updateItem,deleteTodoItem} from '../actions/todosAc'
import {deleteTodo} from '../apis/api'
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
      

      // return this.state
      console.log("TodoItem-handleChange-todoName:",e.target.value)

      return  this.setState({updatedTodoName: e.target.value})
    }
    
    handleDoubleClick = (e) => {
       this.setState({editable: true})
       console.log("double click to edit")

    }
       
        
    handleFormSubmit = (e) => {
           e.preventDefault()
          updateTodo(this.props.todoItem.id, this.state.updatedTodoName,this.props.dispatch)
           
          this.setState({editable: false})
    }
    
   handleDeleteClick = () => {
     // return deleteTodoItem(this.state.id,this.props.dispatch)
     return deleteTodo(this.state.id)
   }

    render(){

      return ( 

            
              <>
              <div className="view">
                 <input className="toggle" type="checkbox" onChange={this.handleChange}/>
                   <label >{this.props.todoItem.todoName}</label>
                         

              </div>
                <button className="destroy" onClick={this.handleDeleteClick}></button>
             </>

      )




    }
}
export default connect()(TodoItem)
//export default TodoItem