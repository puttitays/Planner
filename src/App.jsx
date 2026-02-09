import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from "./test"
import RandomQuote from "./Quote"

export default function App (){
    const[text,setText]=useState("");
    const[items,setItems]=useState(()=>{
        const saved=localStorage.getItem("tasks")
        return saved ? JSON.parse(saved) :[]
        })

    const[cp_items,setcpItems]=useState(()=>{
        const saved=localStorage.getItem("completed")
        return saved ? JSON.parse(saved) :[]
        })


    function handleAdd(){

        const trimmed=text.trim();
        if(!trimmed) return
        setItems((prev)=>[...prev,trimmed])
        setText("")

        }

    function deleteTask(indextoDelete){
        const newItems=items.filter((item,index)=>index !== indextoDelete )
        setItems(newItems)
        }
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(items));


        },[items])


    function completetask(complete_index){
        const complete_task=items.find((item,index)=>index == complete_index )


        const cp_array=JSON.parse(localStorage.getItem("completed"))
        cp_array.push(complete_task)
        localStorage.setItem("completed",JSON.stringify(cp_array));
        setcpItems(cp_array)
       deleteTask(complete_index)
   }


return (<div className="app">
<div className="quote">
    <RandomQuote />
</div>
  <div className="todo">

    <h1>To do list</h1>
<div className=" gap-2">

<input value={text} type="text" className= "form-control d-inline-block w-75 " onChange={(e)=>setText(e.target.value)}
onKeyDown={(e)=>{
    if (e.key === "Enter"){handleAdd()
        }
    }}



/>

<button onClick={handleAdd} className= "btn btn-link"><i className="bi bi-flower1 text-dark fs-3"></i> </button>
</div>

    {items.map((item,i)=>(
        <div className="form-check d-flex align-items-center  gap-2 p-3" >

        <input onClick={()=>completetask(i)}className="form-check-input" type="checkbox"/>
 <label key={i} className="form-check-label" > {item}

        </label>
        <button  className= "btn btn-link ms-auto" onClick={()=>deleteTask(i)}><i class="bi bi-dash-lg text-pink"></i></button>

 </div>
   ))}



    {cp_items.map((cp_item,i)=>(
        <div className="form-check d-flex align-items-center  gap-2 p-3" >

 <label key={i} className="form-check-label text-success" > {cp_item}

        </label>

 </div>
   ))}

</div>
</div>

)
}


