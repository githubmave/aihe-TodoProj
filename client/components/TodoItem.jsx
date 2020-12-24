import React from 'react'
import {updateTodo} from '../apis/api'
//import {updateItem} from '../actions/todosAc'
import {connect} from 'react-redux'


class TodoItem extends React.Component{


     constructor(props) {
        super(props)
         this.state = {
               //todoName: '',
               updatedTodoName: '',
               editable:false
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
           updateTodo(this.props.todoItem.id, this.state.todoName,this.props.dispatch)
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
                    
                          { this.state.editable && 
                               <form onSubmit={this.handleFormSubmit}>
                                 {/* <input className="new-todo"
                                  type = "text" placeholder = {this.props.todoItem.todoName} 
                                  value={this.state.todoNm} onChange={this.hanldeChange}
                                 /> */}

                                    <input className="new-todo"
                                      placeholder = {this.props.todoItem.todoName} autoFocus={true}
                                      type = "text" value ={this.state.todoName} onChange={this.hanldeChange}
                                    />

                                                  
                               </form>
                          }          

              </div>


      )




    }
}
export default connect()(TodoItem)
//export default TodoItem