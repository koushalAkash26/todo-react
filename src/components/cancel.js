import React from 'react'
import style from './appStyle.module.css';
import close from '../images/close.png'
import edit from '../images/edit.png'

function Cancel({collection,setTodos,id,setEdit,setTodo}) {
    function handleClose(){
        let newcollection=collection.filter((todo)=>todo.taskid!==id)
        setTodos(newcollection)
    }
    function handleEdit(){
        let newTodo=collection.find(todo=>todo.taskid===id)
        setTodo(newTodo.task)
        setEdit(newTodo)
    }
    return (
        <>
            <img
            className={style.deleteicon}
            src={close}
            alt="close"
             onClick={()=>handleClose()}
          />
          <img
            className={style.editicon}
            src={edit}
            alt="edit"
              onClick={()=>handleEdit()}
          />

        </>
    )
}

export default Cancel
