



export const GET_TODOS='GET_TODOS'
//export function getTodoItems(todos){
export const getTodoItems = (todos) =>{
       
        return{
           type: GET_TODOS,
           todos: todos

        }
}

