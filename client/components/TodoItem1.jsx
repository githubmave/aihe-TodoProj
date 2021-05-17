
import React from 'react'
import { connect } from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'
 

class TodoItem1 extends React.Component{

         
         state={
        todoItm:this.props.todoItem1,
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

         handleChange =(e) =>{
           e.preventDefault()
             
           return this.setState({updatedTodoNam:e.target.value})
         }
         
         handleDoubleClick =(e)=>{
            e.preventDefault()

           return this.setState({editable: true})

          

            return this.setState({editable:true})
         }
         handleSubmit =(e) =>{
            e.preventDefault()

                   
            return updateTodo(this.state.id,this.state.todoItm,this.props.dispatch) 
         }

    render(){
        return(
              <>
                <div>
                       
                           {!this.state.editable &&
                                 <label className="new-todo" onDoubleClick={this.handleDoubleClick}>{this.props.todoItem1.todoName}</label>
                           
                                 &&
                                 <button className="destroy" onClick={this.handleDelete}></button>
                           }
                           
                          <form onSubmit={this.handleSubmit}>
                            {this.state.editalbe &&
                                <input className="new-todo" type="text" value={this.state.todoNam} onChange={this.handleChange}/>

                                &&
                                <button className="destroy" onClick={this.handleDelete}></button>
                                
                            }
                          </form>

                            
                        
                     
                   

                </div>

              </>


        )


    }
}

export default connect()(TodoItem1)