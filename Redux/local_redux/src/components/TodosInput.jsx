import React from 'react'
import { useRef } from 'react'

import { useDispatch } from 'react-redux'

import { addTodo } from '../Reducer/Todos/Actions'
import { getLogin } from '../Reducer/Auth/Action'



export const TodosInput = () => {
      
      const dispatch = useDispatch();
      const inputData = useRef(null);

      const handleAdd = () =>{
        const valueText = inputData.current.value;
        dispatch(addTodo(valueText))
      };

      const handlelogout = () =>{
        dispatch(getLogin());
      }

  return (
    <>
    
    <button style={{ display:'block'}} onClick={handlelogout}>logout</button>
    
    <h1>Todo</h1>

    <input type="text" name="" id=""  ref={inputData} />
    <button onClick={ handleAdd }>Add Todo</button>
      
    </>
  )
}


