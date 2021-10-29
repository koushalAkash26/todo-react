import React,{useState} from 'react'
import Outputbox from './outputbox'
const storageList=[]

function InputBox() {
   const[task,SetTask]=useState("")
//    const[descrip,SetDescrip]=useState("")
   const[state,setState]=useState(false)
   const[list,setList]=useState([])
   const creator=()=>{
       setState(true)
       storageList.push(task)
       console.log(task)
       console.log(storageList)
       setList(storageList)
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
