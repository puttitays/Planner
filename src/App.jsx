import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from "./test"


export default function App (){
    const[text,setText]=useState("");
    const[items,setItems]=useState(()=>{
        const saved=localStorage.getItem("tasks")
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

return (<div><h1>To do list</h1>


<div className="d-flex gap-2">
<input value={text} type="text" className= "form-control w-60" onChange={(e)=>setText(e.target.value)}
onKeyDown={(e)=>{
    if (e.key === "Enter"){handleAdd()
        }
    }}



/>

<button onClick={handleAdd} className="btn btn-dark w-40" ><i className="bi bi-flower2 "></i> </button>
</div>
<ul>
    {items.map((item,i)=>(
    <li key={i}>{item}
        <button onClick={()=>deleteTask(i)}>Delete</button>

        </li>

   ))}</ul>
<Test />

</div>
)
}


