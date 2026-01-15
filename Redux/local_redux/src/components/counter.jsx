// import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import * as types from '../Reducer/Count/Action';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.Counts.Count);

  //   console.log('🚀 ~ value:', value);

  const handleInc = () => {
    dispatch({ type: types.INCREMENT });
  };

  const handleDec = () => {
    dispatch({ type: types.DECREMENT });
  };

     const handleIncByValue = () => {
    dispatch({ type: types.handleIncByValue, payload:10 });
  };
  

  return (
    <>
      <h1>Counter {value}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleIncByValue}> increment by 5</button>
    </>
  );
};
