
import { useState,useEffect } from 'react'
import RandomQuote from "./Quote"

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

  .then(res => res.json())
  .then(newTask => {
    // 🔥 Add directly to state
    setshowtask(prev => [...prev, newTask]);
    setText("");
  });

    }


const [showtask,setshowtask]=useState([])
useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/dailytask/")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    setshowtask(data)

    })



    },[])

function complete_task(id,currentstatus){

    const new_status=currentstatus==="on progress" ? "done" : "on progress" ;

  fetch(`http://127.0.0.1:8000/api/dailytask/${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: new_status })

  })

setshowtask(prev =>
  prev.map(task =>
    task.id === id
      ? { ...task, status: new_status }
      : task
  )
);

}




    return(<div>
      <input value={input} type="text" onChange={(e)=>setinput(e.target.value)}/>
<button onClick={addtask}>add</button>

    <p>test</p>
{showtask.map(task=>(
<div key={task.id}>

{task.status==="done"?(

      <p style={{ color: "green" }}>
        {task.title}
      </p>)




    :
(      <>
        <input
          type="checkbox"
          onChange={() => complete_task(task.id, task.status)}
        />
        <p>
          {task.title}
        </p>
      </>)



    }



    </div>
    ))}
    </div>
)

    }


