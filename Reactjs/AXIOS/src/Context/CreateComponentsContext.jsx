import { createContext, useState } from "react";

export const contextCreated = createContext(null);

export const CreateComponentsContext = ({children}) =>{
    const [ data, setData ] = useState([]);
    return (
        <contextCreated.Provider value={{ data , setData}}>
            {children}
        </contextCreated.Provider>
    );
};   