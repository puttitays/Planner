
import { useState,useEffect } from 'react'


export default function Test(){

    const [input,setinput]=useState("")
const [task,settask]=useState([])


function addtask(){

settask(input)
    fetch("http://127.0.0.1:8000/api/dailytask/",{
        method:"POST",
         headers: {
    "Content-Type": "application/json",
  },
   body: JSON.stringify({

       title:input,
       status:"on progress"

       })



        })



    }

    return(<div>
      <input value={input} type="text" onChange={(e)=>setinput(e.target.value)}/>
<button onClick={addtask}>add</button>

    <p>test</p>
    <p>{task}</p>
    </div>
)

    }


