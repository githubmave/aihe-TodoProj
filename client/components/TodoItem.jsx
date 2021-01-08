import React from 'react'
import {connect} from 'react-redux'


class TodoItem extends React.Component{

     state={
          todoName: this.props.todoItem.todoName,
          todoId: this.props.todoId

     }



         render(){
           return(


                <div className="view">

                     {/* <p>I am testing TodoItem</p> */}
                    <li key = {this.props.todoId} >{this.props.todoItem.todoName}</li>
                    



                </div>

           )


         }

}


export default connect()(TodoItem)