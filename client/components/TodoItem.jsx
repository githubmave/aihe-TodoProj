import React from 'react'
//import {updateTodo} from '../apis/api'
import {updateItem,deleteTodoItem} from '../actions/todosAc'
import {connect} from 'react-redux'


class TodoItem extends React.Component{


     constructor(props) {
        super(props)
         this.state = {
               //todoName: '',
             // updatedTodoName: '',
             //  updatedTodo: '',
               updatedTodoName: props.todoItem.todoName,
               editable:false,
               id: props.todoItem.id
    }
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
    // handleClickUpdate = (e) =>{
    //     e.preventDefault()
    //     this.setState({todoName: ''})

    //   return this.state
    // }         
        
    handleFormSubmit = (e) => {
           e.preventDefault()
        //  updateTodo(this.props.todoItem.id, this.state.updatedTodoName,this.props.dispatch)
          updateTodo(this.props.todoItem.id, this.state.updatedTodoName,this.props.dispatch)
            // .then(updatedTodo => this.props.dispatch(updateItem(updatedTodo)))
          //  this.setState({todoName: ''})
          this.setState({editable: false})
    }
    
   handleDeleteClick = () => {
      return deleteTodoItem(this.state.id,this.props.dispatch)
   }

    render(){

      return ( 

            
              <>
              <div className="view">
                 <input className="toggle" type="checkbox" onChange={this.handleChange}/>
                
                  {/* { this.state.editable == false && <label onDoubleClick={this.handleDoubleClick}>{this.props.todoItem.todoName}</label>
                  } */}
                    {this.state.editable ==false && <label onDoubleClick={this.handleDoubleClick} >{this.props.todoItem.todoName}</label>}
                          { this.state.editable && 
                               <form onSubmit={this.handleFormSubmit}>
                                   <input className="edit" onChange={this.handleChange} value={this.state.updatedTodoName}/>
                              
                                    {/* <input className="new-todo"
                                      placeholder = {this.props.todoItem.todoName} autoFocus={true}
                                      type = "text" value ={this.state.todo} onChange={this.hanldeChange}
                                    /> */}
                                 {/* <input type='text' onChange={this.handleChange} value ={this.state.updatedTodoName}/> */}
                                                  
                               </form>
                          }  
                          {/* <button className="destroy" onClick={this.handleDeleteClick}></button>         */}

              </div>
                <button className="destroy" onClick={this.handleDeleteClick}></button>
             </>

      )




    }
}
export default connect()(TodoItem)
//export default TodoItem