import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'

//function TodoItemA (props){
    const TodoItemA = (props) => {

            const [todoNam,setTodoNam]=useState(props.todoItem.todoName)
            const [todoId,setTodoId] =useState(props.todoItem.id)

            // useEffect( ()=> {
            //     deleteTodo(todoId, props.dispatch)
            // },[todoId,todoNam])

            const handleDelete =(e,id) => {
            
                setTodoId(id)
                deleteTodo(id, props.dispatch)
                
            }



    return(

            <div>

                 <label className="new-todo">{todoNam}</label>
                 <button className="destroy" onClick={e =>handleDelete(e,todoId)}></button>

            </div>

    )


}


export default connect()(TodoItemA)

