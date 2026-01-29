import { useState } from "react";
import { useLocalStorage } from "./hook/useLocalStorage";
import { useToggle } from "./hook/useToggle";


function App () {
  const [string,setString] = useState('');

  const [value,setValue] = useLocalStorage('name',[]);
  const [toggle,setToggle] = useToggle();
  const [toggle_2,setToggle_2] = useToggle();


  return (
    <>
      <input type="text" onChange={(e) => setString(e.target.value)} />
      <button onClick={() => setValue(string)}>click</button>
     <br/> <br/>
      {toggle && <h1>i am invoked</h1>}
      

     <button onClick={() =>setToggle()}>Toggle</button>
      <button onClick={() => setToggle(false)}>off</button>
      <button onClick={() => setToggle(true)}>on</button>

      <br/> <br/> 

      {toggle_2 && <h1>i am toggle_2</h1>}
      <br/>

      
     <button onClick={() =>setToggle_2()}>Toggle_2</button>
      <button onClick={() => setToggle_2(false)}>off_2</button>
      <button onClick={() => setToggle_2(true)}>on_2</button>


    </>
  )
}

export { App }