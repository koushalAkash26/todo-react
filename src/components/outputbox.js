import React from 'react'
// import { BsFillPinAngleFill } from 'react-icons/bs';
// import { BsCheckLg } from 'react-icons/bs';
import Icontoggler from './icontoggler'




function Outputbox({collection,signal}) {
    
    if(signal){
    return (
        <div>
            {collection.map((todo)=><div><Icontoggler></Icontoggler> {todo}</div>)}
            
        </div>
        // <div>
        //    <div> <BsFillPinAngleFill></BsFillPinAngleFill>   {props.coll} </div>
        //    {/* <div>{props.activity}</div> */}
        // </div>
    )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default Outputbox
