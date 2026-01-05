
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as types from'../Reducer/Action'

export const Todos = () => {
    const [text,setText]= useState("");

    const dispatch = useDispatch();

    const todos  = useSelector((state)=>state.todos)

    const addtodo = ()=>{
        if(text.trim() ==="") return

            dispatch({
        type:types.ADD_TODO,
        payload:text
    });
    setText("");

    }

    const deleteTodo =(index)=>{
      dispatch({
        type:types.DELETE_TODO,
        payload:index
      })
     

    }


  return (
    <>
    <h2> Todo App</h2>
    <input type="text"
    value={text}
    placeholder='Enter todo'
    onChange={(e)=> setText(e.target.value)} />

    <button onClick={addtodo}>Add Todo</button>

    
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>delete</button>
          </li>
        ))}
      </ul>
      
    </>
  )
}

 
