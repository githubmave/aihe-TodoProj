  

import React from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../apis/api'


class AddTodo extends React.Component {

  state = {
     todoName: "",
     Due_Date: "March",
     priority: "high"
   //  completed: true
  }

  handleChange = (e) => {
   
     const {name, value} = e.target
 
    return this.setState({
      [name]: value})
  
  }

  handleSubmit = (evt) => {
     evt.preventDefault()
     addTodo(this.state,this.props.dispatch)

     this.setState({todoName: '',Due_Date: ''})
     console.log("AddTodo,li 23,new todoNm",this.state)
    // this.setState({todoNm: ''})

  }

  render(){
    return (
      <> 
        {/* <label className="edit">Enter a Todo:</label> */}
        <form onSubmit ={this.handleSubmit} >
          
          <h3> Task
            <input type ='text' name="todoName" value={this.state.todoName} onChange={this.handleChange}/>
          </h3>
          <h3> Due date
            <input type ='text' name="Due_Date" value={this.state.Due_Date} onChange={this.handleChange}/>
          </h3>
          <h3> Priority
            <input  type ='text' name="priority" value={this.state.priority} onChange={this.handleChange}/>
          </h3>
              <input type="submit"  value="Add a Todo" />
        </form>
      </>
    )
  }

}
//export default AddTodo

export default connect()(AddTodo)
