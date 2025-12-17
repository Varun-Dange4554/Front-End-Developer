import React from 'react'

import * as type from '../Reducer/Action';


export const TodoList = ({ value }) => {
  const { state, dispatch } = value;

  const handleClickDelete = (id) => {
    dispatch ({type:type.DELETE_TODO_ITEMS, payload: id });
  };

  return (
    <>
    {state.item && 
    state.item.map((el)=>{
      return (
        <ul key={el.id} style={{ display:'flex',justifyContent:'space-around',alignItems:'center',listStyle:'none'}}>
          <input type='checkbox'/>
          <li>{el.id}</li>
          <li> {el.text}</li>
          <div style={{ display:'flex',gap:'10px '}}>
            <button>edit</button>
            <button onClick={()=> handleClickDelete(el.id)}>delete</button>
          </div>

        </ul>
      )
    })}
      
    </>
  )
}


