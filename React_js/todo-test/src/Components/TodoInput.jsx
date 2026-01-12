import React from 'react'

const TodoInput = ( { todolist, setTodoList }) => {

  let saveTodoList=(event)=>{
           event.preventDefault();

    
    
    let toName = event.target.toName.value.trim();
    if (!toName) return;



   if(!todolist.includes(toName)){
    let finalTodoList=[...todolist,toName]
    setTodoList(finalTodoList)
     
   }else{
    alert("all ready includes")
   }

         


  }
  return (
    <div className='App'>
      <h1>Add Todo</h1>
     <form onSubmit={saveTodoList}>
      <input type="text" placeholder='Enter your todo' name='toName' /> <button>Add Todo</button>
     </form>
    </div>
  )
}

export default TodoInput
