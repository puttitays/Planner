import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import RandomQuote from "./Quote"
export default function Todolist ({ tasks, setTasks }){


  const [input,setInput]=useState("")
 function addtask(){
   fetch('http://127.0.0.1:8000/api/dailytask/',{
       method:'POST',
         headers: {
        "Content-Type": "application/json", },
       body:JSON.stringify({title:input,
           status:"on progress"}

           )


       })

  .then(res => res.json())
  .then(data=>setTasks(prev=>[...prev,data]))

}

  useEffect(()=>{
fetch('http://127.0.0.1:8000/api/dailytask/')

.then(res=>res.json())
.then(data=>{setTasks(data)
    console.log(data)})





      },[])
function complete_task(id){

    fetch(`http://127.0.0.1:8000/api/dailytask/${id}/`,{

               method:'PATCH',
         headers: {
        "Content-Type": "application/json", },
       body:JSON.stringify({
           status:"completed"}

           )


       })
  .then(res=>res.json())
  .then(data=>setTasks(
        prev=>prev.map(task=> task.id==id ? {...task,status:"completed"}:task)

      ))




    }


return (

<div className="todo">

    <div className="todo">
        <h1>To do list</h1>
        <div className=" gap-2">
            <input value={input} type="text" className= "form-control d-inline-block w-75 " onChange={(e)=>setInput(e.target.value)}
                onKeyDown={(e)=>{if (e.key === "Enter"){addtask()} }}/>
            <button onClick={addtask} className= "btn btn-link"><i className="bi bi-flower1 text-dark fs-3"></i> </button>
        </div>
    <br/>
       {tasks.map((task)=>{
        if(task.status=="on progress")
            {return <div key={task.id} className="tasklist"> <input type="checkbox" style={{margin: 0,borderRadius: "80%"}} onChange={()=>complete_task(task.id)} /><p style={{margin:0}}>{task.title}</p> </div>}


                })
        }

{/* // else if (task.status=="completed"){return <div className="tasklist" ><input type="checkbox" checked={true} readOnly style={{accentColor:"green"}}/><p style={{margin:0,color:"green"}} >{task.title}</p></div>} */}

</div>
</div>

);

}