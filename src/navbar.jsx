import { Link } from "react-router-dom";


export default function Navbar(){



   return(

       <div className="Navbar">
           <Link to="/calendar" style={{alignSelf:"flex-start",fontSize:"8px"}}><button >Monthly_view</button></Link>
            <Link to="/" style={{alignSelf:"flex-start",fontSize:"8px"}}><button >Todo_view</button></Link>
            <Link to="/monthly_goal" style={{alignSelf:"flex-start",fontSize:"8px"}}><button >Monthly_goal</button></Link>
            <Link to="/" style={{alignSelf:"flex-start",fontSize:"8px"}}><button >Reminder</button></Link>




           </div>





       )



    }