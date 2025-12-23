import React from "react";
 export const Counter = ()=>{
    const [count, setCount] = React.useState(0);
    return(
        <>
        <h1>count {count}</h1>
        <button onClick={()=> setCount((prev)=> prev +1)}>increment</button>
        <button onClick={()=> setCount((prev)=> prev -1)}>decrememt</button>
        </>
    )
 }