import { createContext, useState } from "react";

export const ContextCreate = createContext(null);

export const CounterContext =({ Children })=>{
    const [count,setCount] = useState(0);
    const [dummy,setDummy] = useState(0);

    return (
        <ContextCreate.Provider value={{count,setCount,dummy,setDummy }}>
            
            {Children}

        </ContextCreate.Provider>
    )
}