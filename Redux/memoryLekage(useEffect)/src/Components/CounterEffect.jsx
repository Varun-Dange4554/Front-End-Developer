
import { useEffect, useState } from "react";

export const CounterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        let id = setInterval(()=>{
            console.log('this is time',Date.now())
        },1000);

        return () =>{
            clearInterval(id);
        };
    },[]);
  return (
    <>
    <h1> Counter : {count}</h1>
    <button onClick={()=> setCount((prev)=> prev + 1)}> Increment</button>
    <button onClick={()=> setCount((prev) => prev - 1)}> Decrement</button>

      
    </>
  )
}

// export default CounterEffect
