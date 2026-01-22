import axios from "axios";
import React from "react";

export const TodoInput = ({ getApi }) => {
 const inputValue = React.useRef();

 const addTodos = () =>{
  if(inputValue && inputValue.current.value.trim() !== '') {
    let data = {
      title:inputValue.current.value,
      status:false,
    }
    return axios
    .post('http://localhost:8080/todo',data)
    .then((res) => res)
    .catch((err)=> console.log(err))
  }
 };

 const handleAdd = () =>{
  addTodos().then(()=> getApi())
 };

 return (
  <>
  <input type="text" ref={inputValue} />
  <button onClick={handleAdd}>add</button>
  </>
 );

   
}

