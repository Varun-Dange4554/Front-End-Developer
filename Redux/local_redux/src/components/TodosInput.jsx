import React from 'react'
import { useRef } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import  * as types from '../Reducer/Todos/Actions'


export const TodosInput = () => {
      
      const dispatch = useDispatch();
      const value = useSelector((state) => state.todo)
      console.log('🚀 ~ value:', value);

      const inputData = useRef(null);

      const handleAdd = () =>{
        const valueText = inputData.current.value;
        dispatch({ type:types.ADDTODOS,payload:valueText})
      };
  return (
    <>
    <h1>Todo</h1>
    <input type="text" name="" id=""  ref={inputData} />
    <button onClick={ handleAdd}>Add Todo</button>
      
    </>
  )
}


