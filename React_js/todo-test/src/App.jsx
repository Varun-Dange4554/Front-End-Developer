import  TodoInput  from './Components/TodoInput'
import './App.css'
import TodoList from './Components/TodoList'
import { useState } from 'react'

function App() {
    const [todolist, setTodoList] = useState([])

  

  return (
    <>
    <TodoInput todolist={todolist}
        setTodoList={setTodoList}/>
    <TodoList todolist={todolist}/>
    </> 
  )
}

export default App
