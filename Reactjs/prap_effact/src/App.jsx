
// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [counter,setCounter] = useState(0);

//   // without 
//   // with
//   // empty

//   useEffect(()=>{
//     console.log("this is without [] <-- dependency");
//   })

//   useEffect(()=>{
//     console.log("this is with [] <-- dependency");
//   },[counter]);

//   useEffect(()=>{
//     console.log("this is empty [] <-- dependency");
//   },[])
//   return (
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={()=> setCounter((prev)=> prev + 1)}>+</button>
//       <button onClick={()=> setCounter((prev)=> prev - 1)}>-</button>
      

//     </div>
//   );
// }

// export default App;





import React  from "react";
import "./App.css";
import { Api_Calling } from "./components/Api_Calling";

export const App = () =>{
  const [count,setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(10);

  React.useEffect(()=>{
    console.log("-> always run (no dependency)", count);
  });

  React.useEffect(()=>{
    console.log("-> runs once (empty dependency)");
  }, []);

  React.useEffect(()=>{
    console.log("-> runs when count2 changes", count2);
  }, [count2]);

  return (
    <>
      <h1> count_1{count}</h1>
      <h1> count_2{count2}</h1>

      <button onClick={()=> setCount ((prev)=> prev - 1)}> - </button>
      <button onClick={()=> setCount ((prev)=> prev + 1)}> + </button>

      <button onClick={()=> setCount2 ((prev)=> prev - 1)}>
        count2 decrement
      </button>
      <button onClick={()=> setCount2 ((prev)=> prev + 1)}>
        count2 increment
      </button>

      < Api_Calling />
    </>
  );
};
