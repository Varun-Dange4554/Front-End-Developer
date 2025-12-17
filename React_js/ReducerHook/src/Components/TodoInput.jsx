import React from 'react'



import { reducer } from '../Reducer/Reducer';
import { initialValue } from '../Reducer/Store';
import { ADD_TODO_ITEMS } from '../Reducer/Action';
import { TodoList } from './TodoList';


export const TodoInput = () => {
  const todoText = React.useRef(null);
  const [state,dispatch ] = React.useReducer(reducer,initialValue);
  console.log('🚀 ~ state:', state); 


  const handleAddTodo = ()=>{
    const value = todoText.current.value;
    dispatch({ type: ADD_TODO_ITEMS,payload: value});
  }
  return (
    <>
    <input ref={todoText} type='text' placeholder='enter your task!!!'></input>
    <button onClick={handleAddTodo}>add task</button>
    < TodoList value={{ state ,dispatch}}/>
    
    </>
  )
}

