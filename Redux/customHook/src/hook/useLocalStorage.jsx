import { useState,useEffect } from "react"

export const useLocalStorage = (key,initialValue) => {
    const [value,setValue] = useState(()=>{
        const saveData = localStorage.getItem(key);
        return saveData ? JSON.parse(saveData):initialValue;
    })
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value]);

    const finalVal = (payload)=>{
        setValue((prev) => [...prev,payload]);
    }

  return [value,finalVal];
}


