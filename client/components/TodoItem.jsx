
import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'



class TodoItem extends React.Component{

        //   state = {

        //        id: this.props.todoId
        //   }

        // constructor(props){

        //     super(props)
        //     this.state ={

        //         todoName: props.todoName
        //     }

        // } 

        
     //    state = {

     //        //todoName: this.props.todoName,
     //        todoName: this.props.todoName,
     //        todoId: this.props.todoId,
     //        editable:false


     //        //editable: true
     //    }
        state = {

             todoName: this.props.todoItem.todoName,
             todoId: this.props.todoItem.id,
             completed: this. props.todoItem.completed,
             
             editable: false
        }
 
       handleDoubleClick= () =>{
            this.setState({editable: !editable})
       }

       handleChange = (e) => {
            return this.setState({todoName: e.target.value})
            
       }
       handleSubmit = (e) =>{
            e.preventDefault()
            updateTodo(this.state.todoId,this.state,this.props.dispatch)
            
            
       }
       handleClick = (e) => {
       // e.preventDefault()
       // return deleteTodo(this.state.todoId,this.props.dispatch)
       console.log("TodoItem.jsx/handleClick(id)",this.state.todoId)
     //     return deleteTodo(this.state.todoId,this.props.dispatch)
          
          //  return deleteTodo(this.state.todoItem.id,this.props.dispatch)
          return deleteTodo(this.state.todoId,this.props.dispatch)
       }

       handleCheck = (e) => {
             return this.setState({completed: e.target.value})

       }

       handleDoubleClick = (e) => {

          return this.setState({editable: true})
       }

        // handleChange = () => {

        //     return this.setState({todoName: e.target.value})
        // }

          render(){
               let className = this.props.todoItem.completed ? 'completed' : ''
                if(!className && this.state.editable) className='editing'
              return(

                    <>
                    
                   <li className={className}>
                    <div className="view">
                         <input type="checkbox" className="toggle" onChange={this.handleCheck} checked={this.state.completed}/>
                         {/* {!(this.state.editable) && <label onDoubleClick={this.handleDoubleClick}>{this.state.todoName}</label>} */}
                         <input className="new-todo" type="text" value={this.state.todoName} onChange={this.handleChange}/>
                         <button onClick={this.handleClick} className="destroy"></button>

                        {this.state.editable &&
                              <form onSubmit={this.handleSubmit}>
                                   <input className="new-todo" type="text" value={this.state.todoName} onChange={this.handleChange}/>
                                   
                              </form>  
                       }                
                        {/* {this.state.editable ==false &&<label onDoubleClick={this.handleDoubleClick}>{this.props.todoName}</label>} */}
                        {/* {this.state.editable&& <input type="text" value={this.state.todoName} onChange={this.handleChange}/>} */}

                     {/* { !this.state.editable&& <label onDoubleClick={this.handleDoubleClick} >{this.state.todoName}</label>} */}
                     {/* <form  onSubmit={this.handleSubmit}>
                        {!this.state.editable && <label onDoubleClick={this.handleDoubleClick}>{this.state.todoName}</label>}
                        {this.state.editable &&<input className="new-todo" type="text" value={this.state.todoName} onChange={this.handleChange} />}
                                             
                     </form> */}
                     
                        
                      {/* <button onClick={this.handleClick}> Delete</button>   */}
                      
                   </div>

                   </li>

                   </>
                   
                   
              )

          }



}

// const TodoItem = ({todoName}) =>{



//      return (

//           <div className="view">
//             <li>{todoName}</li>

//           </div>
//      )
// }


export default connect()(TodoItem)