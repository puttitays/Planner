import { useState,useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from "./test"
import Navbar from "./navbar"
import Todolist from "./todolist"
import Monthly_goal from "./monthly_goal"
import Calendar from "./calendar"
import RandomQuote from "./Quote"


export default function App (){
// localStorage.clear()

 const [tasks,setTasks]=useState([])

 return(
     <div>
         <RandomQuote/>
     < Navbar/>

   <Routes>
      <Route path="/" element={<Todolist tasks={tasks} setTasks={setTasks}/>} />
    <Route path="/calendar" element={<Calendar tasks={tasks} setTasks={setTasks}/>} />
    <Route path="/monthly_goal" element={<Monthly_goal />} />
 </Routes>


     </div>

)


}

