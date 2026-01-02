import React from 'react'

import { useContext } from 'react'
import { ContextCreate } from './Context/CounterProvider'

export const counter = () => {

    const { count , setCount } = useContext(ContextCreate);

    const handleInc = ()=>{
        setCount((prev)=> prev+1)
    }

    const handleDec=()=>{
        setCount((prev)=>prev-1)
    };
  return (
    <>
    <h1>
        Counter child{count}
    </h1>
    <button onClick={handleInc}>inc</button>
    <button onClick={handleDec}>Dec</button>  
    </>
  )
}

