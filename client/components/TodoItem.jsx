import React from 'react'
import {connect} from 'react-redux'



class TodoItem extends React.Component{

          state = {

               id: this.props.todoId
          }

          render(){

              return(

                      <li className="view" >{this.props.todoName}</li>
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