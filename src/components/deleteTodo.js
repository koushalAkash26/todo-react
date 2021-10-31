import React from 'react'
import close from '../images/close.png'
import style from './appStyle.module.css'

function DeleteTodo({id,tasklist}) {
    return (
        <>
          <img
            className={style.deleteicon}
            src={close}
            alt="tick"
            // onClick={ handleChangeActive}
          />   
        </>
    )
}

export default DeleteTodo
