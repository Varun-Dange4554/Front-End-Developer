import React from 'react'
import TodoList from './TodoList';


const TodoInput = () => {
  const [todoText, setTodoText] = React.useState(""); 
  const [todoData, setTodoData] = React.useState([]);
  // console.log('🚀 ~ todoData:', todoData);
  

   const handleTodo = () => {
    if (todoText.trim() === "") return;
   const todoInfo ={
    id:Date.now(),
    text: todoText,
    isEdit:false,
   };
   setTodoData((prev)=>[...prev,todoInfo]);
   setTodoText("")
   }
   
   

  return (
    <>
      <h1>Todo Input</h1>
      <input type="text" 
      value={todoText} 
      placeholder='enter your todo'
      onChange={(e)=> setTodoText(e.target.value)}/>

        <button onClick={handleTodo}>Add</button>      
        < TodoList props={{todoData,setTodoData}}    />                     
    </>
  )
}

export default TodoInput;
