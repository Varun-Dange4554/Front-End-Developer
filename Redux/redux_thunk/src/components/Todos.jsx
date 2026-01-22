// ! todo list

import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { TodoInput } from './TodoInput'
import * as actFunc from '../Redux/action' 
import axios from 'axios'

export const Todos = () => {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getApi = () =>{
    axios
    .get('http://localhost:8080/todo')
    .then((res)=> dispatch(actFunc.getTodoSuccess(res.data)))
    .catch((err)=> console.log(err))
  };
  React.useEffect(()=>{
    getApi();
  },[]);
  console.log('data',data)
  return (
    <>
    <h1>todos</h1>   
      <TodoInput getApi={getApi}/>
      {data.map((el) => {
  return (
    <p key={el.id}>
      {el.title} - {el.status ? 'true' : 'false'}
    </p>
  );
})}
    </>
  )
};

