import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../apis/api'


//function AddTodo(props){
//const AddTodo = () =>{.

class AddTodo extends React.Component{
     
      
//      const [todoNam,setTodoNam]=useState('')
//      const [todoItm,setTodoItm]=useState({})
     state={
           todoName: ''
           
     }
   
      handleChange =(e) => { 

           e.preventDefault()
          return this.setState({todoName: e.target.value})

      }
      handleSubmit =(e)=>{
           e.preventDefault()
           console.log("AddTodo/handleSubmit: todoName",this.state)
           
         addTodo(this.state,this.props.dispatch)
        // this.setState({todoName: ''})
     }

     render(){
      return(
         <>
         <div >
          <form onSubmit={this.handleSubmit}>
               <input  className="new-todo"  type="text" value={this.state.todoName}  onChange={this.handleChange}    />
          </form>

         </div>
         </>
      )
     }

}



export default connect()(AddTodo)