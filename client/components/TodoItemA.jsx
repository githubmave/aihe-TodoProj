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
           
          
          

            function fetchData(){
                todoItm.todoName=todoNam
                todoItm.id=todoId
                 updateTodo(todoId,todoItm,props.dispatch)

            }

            // useEffect(()=>{
            //     fetchData()
                
            // },[])

           const handleSubmit = (e) => {
               console.log("TodoItemA/handleSubmit:", todoNam)
              //  fetchData()
              todoItm.todoName=todoNam
              todoItm.id=todoId
               updateTodo(todoId,todoItm,props.dispatch)

           }
           const handleDelete =(e,id) => {
            console.log("TodoItemA/handleDelete:")
            e.preventDefault()
            setTodoId(id)
           deleteTodo(todoId, props.dispatch)
            
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

