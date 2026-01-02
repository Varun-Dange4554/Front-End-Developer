import React from 'react'

import { useContext } from 'react'

import { ContextCreate } from'../Context/CounterProvider'

const Counter = () => {
   
    const { count, setCount } = useContext(ContextCreate)

    const handleInc=()=>{
        setCount((prev)=> prev + 1)
    }

    const handleDec=()=>{
        setCount((prev)=> prev - 1)
    }

     
  return (
    <>
      <h1>Counter child { count}</h1>
     
     <button onClick={handleInc}>Inc</button>
     <button onClick={handleDec}>dec</button>
       
         
  
    </>
  )
}

export default Counter
