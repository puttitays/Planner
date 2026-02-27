
import { useState,useEffect } from "react";


export default function Monthly_goal(){

    const [goals,setgoal]=useState([])


useEffect(()=>{
fetch("http://127.0.0.1:8000/api/monthlygoals/")
.then(res=>res.json())
.then(data=>{setgoal(data)
    console.log(data)

    })
},[]
)

return(

<div className="Monthly_goal">
    <p style={{display:"block"}}>{new Date().toLocaleString("en-US",{month:"long"})}</p>

{goals.map(goal=>(<p style={{display:"block"}} >{goal.title}</p>))}

</div>

)



}