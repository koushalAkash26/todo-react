import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Icontoggler from './togglericon'
import Cancel from './cancel'

function Skeleton() {
    const[todo,setTodo]=useState("")
    const[todos,setTodos]=useState([])
    const[edit, setEdit]=useState(null)
    console.log(edit)
    const updateTodo=(id)=>{
        console.log("heheheh")
        console.log(id)
        const NewTodos=todos.map((todoele)=>
            todoele.taskid===id ? {task:todo,taskid:id} :todoele
        )
        console.log(NewTodos)
        setTodos(NewTodos)
        setEdit("")
    }
    const creator=()=>{
        if(!edit){
            setTodos([...todos,{task:todo,taskid:uuidv4()}])
            setTodo("")
        }
        else{
            updateTodo(edit.taskid)
        }
        
    }
    return (
        <div>
            <div>
            <input value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="enter a task"></input>
           {!edit ?<button onClick={creator}>ADD</button>:<button onClick={creator}>change</button>}
           </div>
           {todos.map((todo)=><div key={todo.taskid}><Icontoggler></Icontoggler><p style={{display:"inline"}}>{todo.task}</p><Cancel collection={todos} setTodos={setTodos} id={todo.taskid} setEdit={setEdit}></Cancel></div>)}
        </div>   
            
    
      
    )
}

export default Skeleton
