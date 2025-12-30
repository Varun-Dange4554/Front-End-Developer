import React from "react";

import { myStore } from '../Store/store';

import * as types from '../Reducer/Action' 


 export const Counter = ()=>{
    const [jugad,setJugad]=React.useState(0);

    const {getState,dispatch,subscribe } = myStore;

    subscribe(()=>{
        setJugad((prev)=> prev + 1);
    });

// console.log('🚀 ~ myStore:', myStore);
// console.log('currentState',myStore.getState())

// const storeValue = myStore.getState();

    
    // const [count, setCount] = React.useState(0);
    return(
        <>
        <h1>count {getState().count}</h1>
        {/* <div className="div"> */}
        <button onClick={()=> dispatch({ type:types.INCREMENT})}>increment</button>
        <button onClick={()=> dispatch({ type:types.DECREMENT})}>decrememt</button>
        {/* </div> */}
        </>
    )
 }