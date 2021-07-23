  

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
     console.log("AddTodo,li 23,new todoNm",this.state)
     this.setState({todoName: ''})

  }

  render(){
    return (
      <> 
        <form onSubmit ={this.handleSubmit} >
          <input className="new-todo" placeholder="What needs to be done?" 
             autoFocus={true} type ='text' value={this.state.todoName} onChange={this.handleChange}/>
        </form>
      </>
    )
  }

}
//export default AddTodo

export default connect()(AddTodo)
