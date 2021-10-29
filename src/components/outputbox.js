import React from 'react'
import Icontoggler from './icontoggler'
import DeleteTodo from './deleteTodo'




function Outputbox({collection,signal}) {
    
    if(signal){
    return (
        <div>
            {collection.map((todo)=><div key={todo.taskid}><Icontoggler></Icontoggler> {todo.taskname}<DeleteTodo id={todo.task}></DeleteTodo></div>)}
            
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
