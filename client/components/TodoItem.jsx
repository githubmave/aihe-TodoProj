import React from 'react'
import {connect} from 'react-redux'
import {updateTodo} from '../apis/api'


class TodoItem extends React.Component{


    //  constructor(props) {
    //     super(props)
    //      this.state = {
    //            todoName: '',
    //            priority: '',
    //            completed: false
    //      }

    //  }
          state = {
              todoName: '' ,
              priority: 'high',
              completed: false
          }


    handleChange = (e) => {
     

      // return this.state

      return  this.setState({todoName: e.target.value})
    }

    handleClickUpdate = (e) =>{
        e.preventDefault()
        this.setState({todoName: ''})

      return this.state
    }
    
    handleFormSubmit = (e) => {
           updateTodo(this.props.todo.id, this.state)
           this.setState({todoName: ''})
    }
    render(){

      return (
     
              <div classn="view">
                 
                
            
                    <form onSubmit = {this.handleFormSubmit}>
                        <input className = "new-todo"
                            // placeholder={this.props.todo.todoName}
                            type = 'text' value={this.state.todoName}
                            onChange={this.handleChange}
                          
                        />

                        <input  
                        
                              type = "submit" value = "Update" onClick={this.handleClickUpdate}
                        />

                        
                      </form>
                  

              </div>


      )




    }
}
export default connect()(TodoItem)