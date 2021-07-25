import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'



class TodoItem extends React.Component{

    state ={
        //todoName: '',
        todoName: this.props.todoItem.todoName,
        id: this.props.todoItem.id,
        editable: false
    }
    
    //  handleDelete =(e,id)=> {
    //  console.log("TodoItem/handleDelete(id) id:",id)
    //   e.preventDefault()
    //   deleteTodo(id, this.props.dispatch)
        
    //  }

    handleDelete = (e)=>{
      e.preventDefault()
      return deleteTodo(this.props.todoItem.id,this.props.dispatch)
    // The following code is WRONG: since it can only change 
    // todos after refreshed the page
    //  return deleteTodo(this.state.id,this.props.dispatch)

    }


     handleChange = (e) => {
        return    this.setState({todoName: e.target.value})

        

     }
     handleDoubleClick = (e) => {

        return this.setState({editable: !this.state.editable})
     }
     handleSubmit = () => {
       updateTodo(this.state.id,this.state,this.props.dispatch)

      //The following code is WRONG ,since this.props.todoItem CAN'T BE
      //CHANGED by updateTodo 
      //updateTodo(this.props.todoItem.id,this.props.dispatch)

     }
       render(){
        return(
            <>
                  <div >
                      <form onSubmit={this.handleSubmit}>
                            { !this.state.editable && <label className="new-todo" onDoubleClick={this.handleDoubleClick}>{this.props.todoItem.todoName}</label>}

                            {/* {!this.state.editable &&  <input className="new-todo" type="text" value={this.props.todoItem.todoName} onDoubleClick={this.handleDoubleClick} />} */}

                            {/* {!this.state.editable &&
                               <label className="new-todo" onDoubleClick={this.handleDoubleClick}>{this.props.todoItem.todoName}</label>
                            } */}

                            {this.state.editable && <input className="new-todo" type="text" value={this.state.todoName} onChange={this.handleChange}/>} 
                             {/* THE BELOW LINE IS WRONG: value={this.props.todoItem.todoName} CAN'T BE CHANGED*/ }
                            {/* {this.state.editable && <input className="new-todo" type="text" value={this.props.todoItem.todoName} onChange={this.handleChange}/>} */}
                     </form>
                  </div>
                  {/* <button className="destroy" onClick= {e => this.handleDelete(e,this.state.id)}></button> */}

                  <button className="destroy" onClick={this.handleDelete}></button>
            </>
        )

       }

}

export default connect()(TodoItem)
//export default TodoItem