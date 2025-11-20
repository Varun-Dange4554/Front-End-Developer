
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);

  // without 
  // with
  // empty

  useEffect(()=>{
    console.log("this is without [] <-- dependency");
  })

  useEffect(()=>{
    console.log("this is with [] <-- dependency");
  },[counter]);

  useEffect(()=>{
    console.log("this is empty [] <-- dependency");
  },[])
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((prev)=> prev + 1)}>+</button>
      <button onClick={()=> setCounter((prev)=> prev - 1)}>-</button>
      

    </div>
  );
}

export default App;
