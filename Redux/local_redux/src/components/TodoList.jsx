import React from 'react'

import  * as types from '../Reducer/Todos/Actions'

import { useDispatch, useSelector} from 'react-redux'
export const TodoList = () => {
  const todos = useSelector((state) => state.todo)
  const dispatch = useDispatch()



    const handleClickDelete=(id)=>{
      dispatch ({ type:types.DELETETODOS, payload: id})

    }




  return (
    <>
      <div style={{  gap: '20px', marginTop: '20px' }}>
        {todos.map((item) => (
          <div
            key={item.id}
            style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}
          >
            <span style={{ marginRight: "20px" }}>#{item.id}</span>
            {item.text}
        
      
        <button style={{ marginTop: '20px',background:'red', marginLeft:"20px" }} onClick={()=>handleClickDelete(item.id)}  >
          Delete
        </button>
          </div>
      

      ))}
      </div>

    </>
  )
}
