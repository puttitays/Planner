import { useState,useEffect } from 'react'

export default function Calendar({tasks}){



function getdailytask(){


    fetch('http://127.0.0.1:8000/api/dailytask/')
    .then(res=>res.json())
    .then(data=>{setTasks(data)})




    }

useEffect(()=>{getdailytask()},[])


const week_th=[0,1,2,3,4]
const day_th=[1,2,3,4,5,6,7]


return(
    <div>



<table>
  <tr>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
    <th>Sunday</th>
  </tr>

{ week_th.map((i)=>(
    <tr key={i}>
    {day_th.map((k)=>(<td key={k}>
        <div>
        <p>{k+(7*(i))}</p>
{console.log(new Date(tasks[4]?.task_date).getDate())}
        {tasks.map((item)=>(
new Date(item.task_date).getDate()== k+(7*i) ?
           <p>{item.title}</p>:""

            ))

            }

        </div>





        </td>))}
    </tr>
))





    }
</table>

        </div>






    )

}