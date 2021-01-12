import e from 'express'
import React from 'react'
import {connect} from 'react-redux'



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
        state = {

            todoName: this.props.todoName,
            editable: false
        }

 
            
        //  handleDoubleClick = (e) => {

        //     this.setState({editable: true})
        //  }
        handleDoubleClick = (e) => {


            this.setState({editable: true})
        }

        handleChange = () =>{

            return this.setState({todoName: e.target.value})
        }

          render(){

              return(

                    //  <li className="view" >{this.state.todoName}</li>

               

                   <li className="view">
                       {!(this.state.editable)&&<label onDoubleClick={this.handleDoubleClick}>{this.state.todoName}</label>}
                       {this.state.editable&& <input type="text" value={this.state.todoName} onChange={this.handleChange}/>}
                   </li>

                   

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