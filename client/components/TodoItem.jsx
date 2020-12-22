import React from 'react'
import {connect} from 'react-redux'
import {updateTodo} from '../apis/api'
import {updateItem} from '../actions/todosAc'


class TodoItem extends React.Component{


    //  constructor(props) {
    //     super(props)
    //      this.state = {
    //            todoName: '',
    //            priority: '',
    //            completed: false
    //      }

    //  }
          // state = {
          //     todoName: '' ,
          //     priority: 'high',
          //     completed: false
          // }
          state = {

             editable: false,
             todoName: ''
          
              

          }

          // const updatedTodo = {

          //       todoName: this.state.todoName,
          //       priority:"high",
          //       completed: false
          // }
          


    handleChange = (e) => {
     

      // return this.state

      return  this.setState({todoName: e.target.value})
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
           updateTodo(this.props.todoItem.id, this.state.todoName)
            // .then(updatedTodo => this.props.dispatch(updateItem(updatedTodo)))
          //  this.setState({todoName: ''})
          this.setState({editable: false})
    }

    render(){

      return (
     
              <div classn="view">
                 <input className="toggle" type="checkbox" onChange={this.handleChange}/>
                
                  { this.state.editable == false && <label onDoubleClick={this.handleDoubleClick}>{this.props.todoItem.todoName}</label>
                  }
                    {/* <form onSubmit = {this.handleFormSubmit}>
                        <input className = "new-todo"
                            // placeholder={this.props.todo.todoName}
                            type = 'text' value={this.state.todoName}
                            onChange={this.handleChange}
                          
                        />

                        <input  
                        
                              type = "submit" value = "Update" onClick={this.handleClickUpdate}
                        />

                        
                       </form>  */}
                        
                        
                          {this.state.editable && 
                               <form onSubmit={this.handleFormSubmit}>
                                 <input className="new-todo"
                                  type = "text" placeholder = {this.props.todoItem.todoName} 
                                  value={this.state.todoNm} onChange={this.hanldeChange}
                                 />
                                                  
                               </form>
                          }          

              </div>


      )




    }
}
export default connect()(TodoItem)
//export default TodoItem