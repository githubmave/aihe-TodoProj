
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

            //todoName: this.props.todoName,
            todoName: this.props.todoName


            //editable: true
        }
        
 
       handleDoubleClick= () =>{

            this.setState({editable: true})

       }

       handleChange = (e) => {
            return this.setState({todoName: e.target.value})
            
       }
       handleSubmit = (e) =>{
            e.preventDefault()

           
       }

        // handleChange = () => {

        //     return this.setState({todoName: e.target.value})
        // }

          render(){

              return(

                    //  <li className="view" >{this.state.todoName}</li>

               
                    <div className="view">
                    <li >
                        {/* {this.state.editable ==false &&<label onDoubleClick={this.handleDoubleClick}>{this.props.todoName}</label>} */}
                        {/* {this.state.editable&& <input type="text" value={this.state.todoName} onChange={this.handleChange}/>} */}

                     {/* { !this.state.editable&& <label onDoubleClick={this.handleDoubleClick} >{this.state.todoName}</label>} */}
                    
                     <form onSubmit={this.handleSubmit}>

                        <input className="new-todo" type="text" value={this.state.todoName} onChange={this.handleChange} />

                     </form>
                     
                    </li>
                   </div>
                   

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