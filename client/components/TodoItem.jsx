import React from 'react'
import {connect} from 'react-redux'


class TodoItem extends React.Component{


    //  constructor(props) {
    //     super(props)
    //      this.state = {
    //            todoName: '',
    //            priority: '',
    //            completed: false
    //      }

    //  }

  
    
    render(){

      return (
     
              <div classn="view">

                    <input  className="new-todo"
                        placeholder={this.props.todo.todoName}
                        type = 'text' 
                       
                    />
              </div>


      )




    }
}
export default connect()(TodoItem)