import React from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import {deleteTodo, updateTodo} from '../apis/api'
//import {Link} from 'react-router-dom'


class TodoItem extends React.Component{

    state ={
        //todoName: '',
        todoName: this.props.todoArr.todoName,
        id: this.props.todoArr.id,
        editable: false,
        todoNam: useParams()
    }

    // const { todoNam } =useParams()
    
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
                      {/* <form onSubmit={this.handleSubmit}> */}
                           
                            {/* {this.props.todoArr.map( (todo,i)=> {
                                if(todo.todoName === this.state.todoNam){
                                  return <li key={i}>{todo.todoName}</li>
                                }

                            }                         
                            )}
                          
                            {this.state.editable && <input className="new-todo" type="text" value={this.state.todoName} onChange={this.handleChange}/>}  */}
                             
                     {/* </form> */}
                     <p>I am testing</p>
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