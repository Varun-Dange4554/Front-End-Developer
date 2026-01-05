import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import * as types from '../Reducer/Action';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.count);

  //   console.log('🚀 ~ value:', value);

  const handleInc = () => {
    dispatch({ type: types.INCREMENT });
  };

  const handleDec = () => {
    dispatch({ type: types.DECREMENT });
  };

  return (
    <>
      <h1>Counter {value}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </>
  );
};
