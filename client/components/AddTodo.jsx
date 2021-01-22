  

import React from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../apis/api'


class AddTodo extends React.Component {

  state = {
     todoName: "",
     priority: "high",
     completed: true
  }

  handleChange = (evt) => {
    //console.log("AddTodo,li 16,new todoNm",this.state.todoNm)
    return this.setState({todoName: evt.target.value,priority:"low",completed:false})
           
          

  }

  handleSubmit = (evt) => {
     evt.preventDefault()
     addTodo(this.state,this.props.dispatch)

     this.setState({todoName: ''})
     console.log("AddTodo,li 23,new todoNm",this.state)
    // this.setState({todoNm: ''})

  }

  render(){
    return (
      <> 
        {/* <label className="edit">Enter a Todo:</label> */}
        <form onSubmit ={this.handleSubmit} >
          <h2>Enter a Todo:</h2>
          <h3> Task
            <input placeholder="What needs to be done?" 
              autoFocus={true} type ='text' value={this.state.todoName} onChange={this.handleChange}/>
          </h3>
          <h3> Due day:
            <input placeholder="What date needs to be done?" 
              autoFocus={true} type ='text' value={this.state.todoName} onChange={this.handleChange}/>
          </h3>
          <h3> Priority
            <input
              autoFocus={true} type ='text' value={this.state.todoName} onChange={this.handleChange}/>
          </h3>

        </form>
      </>
    )
  }

}
//export default AddTodo

export default connect()(AddTodo)
