
import React from 'react'
import { connect } from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'
 

class TodoItem1 extends React.Component{

         
         state={

        todoNam: this.props.todoItem1.todoName,
        id: this.props.todoItem1.id,
        editable:false
             

         }

        handleChange = (e)=>{
            e.preventDefault()
            console.log("TodoItem1/handleChange occured")
        }

        handleDoubleClick = (e)=>{
           e.preventDefault()

        }
        handleDelete =(e,id)=> {
                e.preventDefault()

               return deleteTodo(id,this.props.dispatch)
         }
   

         handleSubmit=(e)=>{
            e.preventDefault()

            
            return updateTodo(this.state.id,this.state.updatedTodoNam,this.props.dispatch)
         }

         handleDoubleClick = (e) =>{
                 e.preventDefault()

                return this.setState({editable:true})
          
         }

         handledChange =(e) =>{
           e.preventDefault()
             
           return this.setState({updatedTodoNam:e.target.value})
         }

         

    render(){
        return(
              <>
                <div>
                       <form onSubmit={this.handleSubmit}>
                            {!this.state.editable &&
                                <input className="new-todo" type="text" value={this.state.todoNam} onDoubleClick={this.handleDoubleClick} />
                            }

                            {this.state.editable &&
                              <input className="new-todo" type="text" onChange={this.handleChange}/>
                            }
                        </form>
                    


                     
                    <button className="destroy" onClick={e =>this.handleDelete(e,this.state.id)}></button>  

                </div>

              </>


        )


    }
}

export default connect()(TodoItem1)