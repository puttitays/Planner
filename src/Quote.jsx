import { useState,useEffect } from 'react'


export default function RandomQuote(){
    const[quotes,setQuotes]=useState([]);

    useEffect(()=>{
fetch("http://127.0.0.1:8000/api/quote/")
.then(res => res.json())
.then(data => setQuotes(data));


        },[])
const quote_index=Math.floor(Math.random()*(quotes.length))
  if (!quotes[quote_index]) {
    return <h1>Loading...</h1>;
  }

return(<div className="quote"><p >{quotes[quote_index].Quote}</p>

    <p style={{ marginLeft: "auto" }}  >{quotes[quote_index].Author}</p>






    </div>)

    }