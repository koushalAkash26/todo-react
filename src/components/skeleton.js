import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Icontoggler from './togglericon'
import Cancel from './cancel'
import styles from './appStyle.module.css'
import emoji from '../images/think.gif'

function Skeleton() {
    const[todo,setTodo]=useState("")
    const[todos,setTodos]=useState(()=>{
        const localData=localStorage.getItem('todos')
        return localData? JSON.parse(localData):[]
    })
    const[edit, setEdit]=useState(null)
    const[status,setStatus]=useState(false)
    console.log(edit)
    const updateTodo=(id)=>{

        const NewTodos=todos.map((todoele)=>
            todoele.taskid===id ? {task:todo,taskid:id}  :todoele
        )
        console.log(NewTodos)
        setTodos(NewTodos)
        setEdit("")
    }
    const creator=()=>{
        if(!edit){
            setTodos([...todos,{task:todo,taskid:uuidv4(),taskstatus:status}])
            setTodo("")
        }
        else{
            updateTodo(edit.taskid)
        }
        
    }
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    
    return (
        <div>

             <input value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="enter a task" className={!edit ? styles.searchBox:styles.searchBoxnotify}></input>
     

           {!edit ?<button className={styles.button} onClick={creator}>ADD</button>:<button className={styles.button2} onClick={creator}>change</button>}
           {console.log(todos)}
           {todos.length!==0?console.log("hi"):console.log("hello")}
          {todos.length!==0? todos.map((todo)=><div className={styles.todos} key={todo.taskid}>
              <Icontoggler setStatus={setStatus}></Icontoggler><div className={styles.content}>{todo.task}</div>
              <Cancel collection={todos} setTodos={setTodos} id={todo.taskid} setEdit={setEdit} setTodo={setTodo}></Cancel></div>):<div>
              <img className={styles.emoji}src={emoji} alt="think"/>
              <p className={styles.tagline}>plan your Day!!</p>
              </div>}
        </div>   
            
    
      
    )
}

export default Skeleton
