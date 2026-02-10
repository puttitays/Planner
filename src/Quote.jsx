import React,{ useState,useEffect } from 'react'


export default function RandomQuote(){
    const[quotes,setQuotes]=useState([]);
    const [quoteIndex,setQuoteindex]=useState(null)

    useEffect(()=>{
fetch("http://127.0.0.1:8000/api/quote/")
.then(res => res.json())
.then(data => setQuotes(data));


        },[])


useEffect(()=>{

   const quote_index=Math.floor(Math.random()*(quotes.length))
  setQuoteindex(quote_index)

        },[quotes])








  if (!quotes[quoteIndex]) {
    return <h1>Loading...</h1>;
  }

return(<div className="quote"><p >{quotes[quoteIndex].Quote}</p>

    <p style={{ marginLeft: "auto" }}>   ― {quotes[quoteIndex].Author}</p>






    </div>)

    }
