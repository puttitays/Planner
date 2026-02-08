
import { useState,useEffect } from 'react'


export default function Test(){

const[texts,setTexts]=useState("")
const[tasks,setTasks]=useState(

    JSON.parse(localStorage.getItem("task"))||[]



    )
function clickAdd(){
    const newtask=[...tasks,texts]
    setTasks(newtask)
    localStorage.setItem("task",JSON.stringify(newtask))


    }


function delete_task(indextosdelete){
    const new_task=tasks.filter((task,index)=>index !== indextosdelete)
    setTasks(new_task)
    localStorage.setItem("task",JSON.stringify(new_task))
    }

return  (
<div><h1>To do List</h1>
<input value={texts} type="text" onChange={(e)=>setTexts(e.target.value)} onKeyDown={(e)=>{if (e.key=="Enter"){clickAdd()}}} />
<p>Current text:{texts} </p>
<button onClick={clickAdd}>add</button>

<ul>
    {tasks.map((task,i)=>(

        <li>{task}
<button onClick={()=>delete_task(i)}>delete</button>


</li>
       ) )}

    </ul>


    </div>

    )


    }

