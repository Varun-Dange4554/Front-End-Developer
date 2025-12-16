import React from 'react'

const TodoList = ({ props }) => {
  const { todoData, setTodoData } = props;

  const handleDelete = (id) => {
    const updated = todoData.filter(todo => todo.id !== id);
    setTodoData(updated);
  };

  return (
    <>
      <h1>Todo List</h1>

      {todoData.length === 0 && <p></p>}

      {todoData.map((el) => (
        <div
          key={el.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            width: "300px"
          }}
        >
         
          <span>{el.text}</span>

          
          <button onClick={() => handleDelete(el.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  )
}

export default TodoList;
