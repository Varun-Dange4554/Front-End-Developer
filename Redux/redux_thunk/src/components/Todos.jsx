
import React from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'

import { TodoInput } from './TodoInput'
import { getApi } from '../Redux/action' 


export const Todos = () => {
  const {todo,isLoading,isError} = useSelector((state)=>{
    return {
      todo:state.todos,
      isLoading:state.isLoading,
      isError:state.isError,
    };
  }, shallowEqual)
    

  const dispatch = useDispatch();

  
  React.useEffect(()=>{
    dispatch(getApi);
  },[]);

  return (
    <>
    <h1>todos</h1>   
      <TodoInput />
      {todo?.map((el) => (
        <p key={el.id}>
          {el.title} - {el.status ? 'true' : 'false'}
        </p>
      ))}
      {isLoading && <h1>Loading........ </h1>}
      {isError && <h1>Something went wrong.....</h1>}

    </>
  )
};






