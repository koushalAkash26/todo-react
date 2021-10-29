import React,{useState} from 'react'
import Outputbox from './outputbox'
import { v4 as uuidv4 } from 'uuid';


function InputBox() {
   const[task,SetTask]=useState("")
//    const[descrip,SetDescrip]=useState("")
   const[state,setState]=useState(false)
  
   const[list,setList]=useState([])
   const creator=()=>{
       setState(true)
       console.log(task)
       console.log(`prev=>${list}`)
       setList([...list,{taskname:task,taskid:uuidv4()}])
       console.log(list)
       SetTask("")
       
       }
    return (
        <div>
           <input value={task} onChange={(e)=>SetTask(e.target.value)}></input>
           {/* <input value={descrip} onChange={(e)=>SetDescrip(e.target.value)}></input> */}
           <button onClick={creator}>ADD</button>
          
           {/* {state && <Outputbox collection={list}></Outputbox>} */}
           <Outputbox collection={list} signal={state}></Outputbox>
           
           

        </div>
    )
}

export default InputBox
