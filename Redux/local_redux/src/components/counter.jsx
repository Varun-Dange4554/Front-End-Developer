
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../Reducer/Count/Action';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.Counts.count);


  const handleInc = () => {
    dispatch({ type: types.INCREMENT });
  };

  const handleDec = () => {
    dispatch({ type: types.DECREMENT });
  };

     const handleIncByValue = () => {
    dispatch({ type: types.INCREMENT_BY_VALUE, payload:5 });
  };
  

  return (
    <>
      <h1>Counter {value}</h1>
      <div style={{display:'flex',gap:"20px"}}>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleIncByValue}> increment by 5</button>
      </div>
    </>
  );
};
