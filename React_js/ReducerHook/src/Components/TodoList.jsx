import {useRef} from 'react'

import * as type from '../Reducer/Action';


export const TodoList = ({ value }) => {
 const editValue = useRef(null);
  const { state, dispatch } = value;

  const handleClickDelete = (id) => {
    dispatch ({type: type.DELETE_TODO_ITEMS, payload: id });
  };

  const handleClickEdit = (id) =>{
    dispatch({ type: type.EDITS_TODO_ITEMS, payload: id});
  };

  const handleClickConfirm = (id) => {
    // console.log('🚀 ~ id:', id);

    const editText = editValue.current.value.trim();
    // console.log('🚀 ~ editText:', editText);
    dispatch({
      type: type.EDITS_TODO_ITEMS,
      payload: { updatedText: editText, id:id},
    });
    
  };
  const handleClickCancle = (id) => {
    dispatch ({ type: type.EDITS_TODO_ITEMS, payload: id });
  };

  

  return (
    <>
     { state.items && 
     state.items.map((el)=>{
      return(
        <ul key={el.id}
        style={{ display:'flex', alignItems:'center',listStyle:'none',gap:'50px'

        }}
        >
          <input type='checkbox'/>
          <li>{el.id}</li>
          {el.isEdits ? ( 
            <input ref={editValue} defaultValue={el.text} type='text'/>

          ) : (
            <li>{el.text}</li>
          )}
          <div style={{ display:'flex',gap:'10px '}}>
            {el.isEdits ? (
              <>
              <button style={{ background:'green'}} onClick={()=> handleClickConfirm(el.id) }> confirm</button>
              <button 
              style={{ background:'red'}} onClick={()=>handleClickCancle(el.id) }> Cancel </button>
              </>
            ) : (
              <>
              <button style={{background:'green'}} onClick={()=>handleClickEdit(el.id)}> edit </button>
              <button style={{ background:"red"}} onClick={()=> handleClickDelete(el.id)}> delete</button>
              </>
            )}
          </div>
        </ul>
      )
     })}


    </>
  )
}



