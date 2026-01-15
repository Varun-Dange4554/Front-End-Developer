import React,{ useRef } from 'react'
import { useDispatch, useSelector} from 'react-redux'



import  * as types from '../Reducer/Todos/Actions'

export const TodoList = () => {
  const dispatch = useDispatch()
  const editRef = useRef(null)
  

  const value = useSelector((xyz) => {
    return xyz.todos.todo;
  })
  console.log('🚀 ~ value:', value);

  const { token } = useSelector((xyz)=>{
    return xyz.auths;
  })
  console.log('🚀 ~ token:', token);
  

    const handleClickDelete = (id) =>{
      dispatch ({ type: types.DELETETODOS, payload: id})

    }

    const handleClickEdit = (id) =>{
      dispatch({ type: types.EDITTODOS, payload: id })
    };

    const handleConfirm = (id) => {
      const text = editRef.current.value.trim()
      if (!text ) return
      dispatch({
        type: types.UPDATETODOS,
        payload: {id,text},
      });
    };
   

    const handleCancel = (id) =>{
      dispatch({type: types.CANCELTODOS,payload:id})
    }


  return (
    <>
    <h1 style={{ 
      color:'tomato',
      fontSize:'24px',
      fontWeight:'bolder',
    }}>
      {token}
    </h1>

    <h2>Todo List</h2>
    { value && 
    value.map((el) => {
      return (
        <div key={el.id} style={{width:'70%',
          margin:'10px auto',
          display:'flex',
          justifyContent:'space-around',
        }}
        >
          <input type='checkbox'/>
          
          <h3>#{el.id}</h3>
          {el.isEdit ? (
            <input
            ref={editRef}
             type='text'
            defaultValue={el.text} />

          ) : (
             <h3>{el.text}</h3>
          )}
          {el.isEdit ? (
          <>
          <button onClick={() => handleConfirm(el.id) } > confirm</button>
          <button onClick={() => handleCancel(el.id)}> cancel </button>
          </>
          ) : (
          <>
          <button onClick={() =>handleClickEdit(el.id) }>edite</button>
          <button onClick={() => handleClickDelete(el.id) }>delete</button>
          </>
          )}
        </div>
      )
    })}
    </>
  );
};
