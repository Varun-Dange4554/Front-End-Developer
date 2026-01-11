import React from 'react'

const TodoList = ({todolist}) => {
  
  return (
    
   
      
    <div className='App'>
       <h2>Todo List</h2>

    {todolist.length === 0 && <p>No todo yeat</p>}

    <ul>
      {todolist.map((item,index) =>(
        <h1 key={index}>{item}</h1>
      ))}
    </ul>
    </div>
  )
}

export default TodoList
