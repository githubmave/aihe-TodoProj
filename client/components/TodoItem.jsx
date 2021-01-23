import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'
//import {Link} from 'react-router-dom'



class TodoItem extends React.Component{

    state ={
        //todoName: '',
        todoName: this.props.todoArr.todoName,
        id: this.props.todoArr.id,
        editable: false
    }
    
     handleDelete =(e,id)=> {
     console.log("TodoItem/handleDelete(id) id:",id)
      e.preventDefault()
      deleteTodo(id, this.props.dispatch)
        
     }
     handleChange = (e) => {
        return    this.setState({todoName: e.target.value})

        

     }
     handleDoubleClick = (e) => {

        return this.setState({editable: true})
     }
     handleSubmit = () => {
       updateTodo(this.state.id,this.state,this.props.dispatch)

     }
       render(){
        return(
            <>
                  <div >
                      <form onSubmit={this.handleSubmit}>
                            {/* { !this.state.editable && <label className="new-todo" onDoubleClick={this.handleDoubleClick}>{this.props.todoItem.todoName}</label>} */}
                            {/* {!this.state.editable && <Link to={`/todos/${this.props.todoItem.todoName}`}>{this.props.todoItem.todoName}</Link> } */}
                            
                            {this.props.todoArr.map( (todoItem,i) => <li key={i}>{todoItem.todoName}</li>)}
                            {this.state.editable && <input className="new-todo" type="text" value={this.state.todoName} onChange={this.handleChange}/>} 
                             {/* THE BELOW LINE IS WRONG: value={this.props.todoItem.todoName} CAN'T BE CHANGED*/ }
                            {/* {this.state.editable && <input className="new-todo" type="text" value={this.props.todoItem.todoName} onChange={this.handleChange}/>} */}
                     </form>
                  </div>
                  <button className="destroy" onClick= {e => this.handleDelete(e,this.state.id)}></button>
            </>
        )

       }

}

//export default connect()(TodoItem)
//export default TodoItem
function mapStateToProps (globalState) {
  return {
   
    todoArr: globalState.todosRdc

    
  }
}

export default connect(mapStateToProps)(TodoItem)