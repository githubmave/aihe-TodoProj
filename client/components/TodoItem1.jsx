
import React from 'react'
import { connect } from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'
 

class TodoItem1 extends React.Component{

         
         state={
        todoItm:this.props.todoItem1,
        todoNam: this.props.todoItem1.todoName,
        todoId: this.props.todoItem1.id,
        editable:false
             

         }

        handleChange = (e)=>{
            e.preventDefault()
            console.log("TodoItem1/handleChange occured")
        }

        handleDoubleClick = (e)=>{
           e.preventDefault()

        }
       
   

         handleSubmit=(e)=>{
            e.preventDefault()

            
            return updateTodo(this.state.id,this.state.updatedTodoNam,this.props.dispatch)
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

         handleDelete =(e,id)=> {
            e.preventDefault()
            console.log("TotoItem1/handleDelete")
          // return deleteTodo(this.state.id,this.props.dispatch)
          //this.setState({todoId:id})
         //  return deleteTodo(this.state.todoId,this.props.dispatch)
         deleteTodo(id,this.props.dispatch)
         }

    render(){
        return(
              <>
                <div>
                         {!this.state.editable && 
                           <label className="new-todo" >{this.props.todoItem1.todoName}
                           <button className="destroy" onClick={e=>this.handleDelete(e,this.state.todoId)}></button>
                           </label>
                    
                         }
 

                       
                        
                </div>

              </>


        )


    }
}

export default connect()(TodoItem1)