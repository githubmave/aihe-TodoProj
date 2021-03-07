
import React from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../apis/api'

class AddTodo extends React.Component{
          state={

            todoName:''
          }

     handleAddClick =(e)=>{
         e.preventDefault()
         this.setState({todoName: 'play drum'})
        addTodo(this.state,this.props.dispatch)
     }
          render(){

               return(

                   <>
                    <button onClick={this.handleAddClick}>Add Todo</button>
                   </>
               )

          }


}

export default connect()(AddTodo)