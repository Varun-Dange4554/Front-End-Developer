const btn_Add = document.querySelector(".add_btn")
let store =  JSON.parse(localStorage.getItem("todos")) || [];   

btn_Add.addEventListener("click",()=>{
    const value_todo = document.querySelector("#todo_val").value
    // console.log('🚀 ~ value_todo:', value_todo);
    

    const dataObj = {
        id:Date.now(),
        todo:value_todo,
        isEdits:false,
        isCompleted:false
    }
    store.push(dataObj);

    localStorage.setItem("todos",JSON.stringify(store));
    document.querySelector("#todo_val").value = "";
    read_Todo();
});

const read_Todo = ()=>{
    const mainDiv = document.querySelector("#todo_list");

    mainDiv.innerHTML = ""; 

//     store.forEach((el)=>{
//         const todoDiv = document.createElement("div");
//         const textTodo = document.createElement("h4");
//         const input_is_completes = document.createElement("input")
//         const btn_edits = document.createElement("button");
//         const btn_delete = document.createElement("button");


//         textTodo.innerText = el.todo;

//         todoDiv.append(input_is_completes,textTodo,btn_edits,btn_delete)
//         mainDiv.append(todoDiv);
 
//     })
// }




 store.forEach((el) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo_item");

        const textTodo = document.createElement("h4");
        textTodo.innerText = el.todo;

        const input_is_completes = document.createElement("input");
        input_is_completes.type = "checkbox";
        input_is_completes.checked = el.isCompleted;

        const btn_edits = document.createElement("button");
        btn_edits.innerText = "Edit";

        const btn_delete = document.createElement("button");
        btn_delete.innerText = "Delete";

        // Optional: Add classes for styling if needed
        btn_edits.classList.add("edit_btn");
        btn_delete.classList.add("delete_btn");

        // Append elements to the todo item
        todoDiv.append(input_is_completes, textTodo, btn_edits, btn_delete);
        mainDiv.appendChild(todoDiv);



           btn_delete.addEventListener("click",()=>{
            store = store.filter((item)=> item.id !==el.id);

            localStorage.setItem("todos",JSON.stringify(store))
            read_Todo();
           })

    });
};




