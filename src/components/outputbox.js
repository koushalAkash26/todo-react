import React from 'react'
import Icontoggler from './icontoggler'
import close from '../images/close.png'
import style from './appStyle.module.css'



function Outputbox({collection,signal,setList}) {
    
    if(signal){
        function handleClose(id){
            // console.log(typeof(id))
            // console.log("hello")
            // console.log(id)
            // collection.map(todo=>console.log(todo.id))
            // collection.map(todo=>console.log(todo.id!==id))
            let newCollection=collection.filter((todo)=>todo.taskid!==id)
            console.log(newCollection)
            collection=newCollection
            setList(collection)
        }
        
    return (
        <div>
            {collection.map((todo)=><div key={todo.taskid}><Icontoggler></Icontoggler> {todo.taskname}<img
            className={style.deleteicon}
            src={close}
            alt="close"
             onClick={()=>handleClose(todo.taskid)}
          /></div>)}
            
        </div>
        
    )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default Outputbox
