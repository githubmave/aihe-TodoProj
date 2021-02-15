import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {deleteTodo, updateTodo} from '../apis/api'

//function TodoItemA (props){
    const TodoItemA = (props) => {

            const [todoNam,setTodoNam]=useState(props.todoItem.todoName)
            const [todoId,setTodoId] =useState(props.todoItem.id)

            const [todoItm,setTodoItm]=useState(props.todoItem)
          // const [editable,setEditable]=useState('false')

            // useEffect( ()=> {
            //     deleteTodo(todoId, props.dispatch)
            // },[todoId,todoNam])

            const handleDelete =(e,id) => {
                console.log("TodoItemA/handleDelete:")
                setTodoId(id)
                deleteTodo(id, props.dispatch)
                
            }

            async function fetchData(){
                todoItm.todoName=todoNam
                todoItm.id=todoID
                 updateTodo(todoId,todoItm)

            }

           const handleSubmit = (e) => {
               console.log("TodoItemA/handleSubmit:", todoNam)
                fetchData(todoId, todoNam)

           }

    return(

            <div>
                
                 {/* <label className="new-todo" onDoubleClick={e=>setEditable(true)}>{todoNam}</label> */}
                 <form onSubmit={handleSubmit}>
                    <input className="new-todo" value={todoNam} onChange={e => setTodoNam(e.target.value)}/>
                 </form>
                 <button className="destroy" onClick={e =>handleDelete(e,todoId)}></button>

            </div>

    )


}


export default connect()(TodoItemA)

