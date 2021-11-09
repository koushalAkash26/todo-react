import React,{useState} from 'react'
import Cancel from './cancel'
import styles from './appStyle.module.css'
import Inactive from "../images/push-pin.png";
import Active from "../images/accept.png";
function Segment({todo,todos,setEdit,setTodo,setTodos,state,setState}) {
    const[active,setActive]=useState(state)
    const handleChangeActive=()=>{
        setActive(!active)
        setState(!state)
    }
    return (
        <div className={styles.todoContent}>
            {active ? (
          <img
            className={styles.toggleicon}
            src={Active}
            alt="tick"
            onClick={ handleChangeActive}
          />
        ) : (
          <img
            className={styles.toggleicon}
            src={Inactive}
            alt="pin"
            onClick={ handleChangeActive}
          />
        )}
        <div className={styles.content}>{todo.task}</div>
        <Cancel collection={todos} setTodos={setTodos} id={todo.taskid} setEdit={setEdit} setTodo={setTodo}></Cancel>
        </div>
    )
}

export default Segment
