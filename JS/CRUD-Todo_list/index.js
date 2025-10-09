
const btn_Add = document.querySelector(".add_btn");
let store = JSON.parse(localStorage.getItem("todos")) || [];

btn_Add.addEventListener("click",()=>{
    const value_todo = document.querySelector("#todoVal").value

    const dataObj = {
        id: Date.now(),
        todo: value_todo,
        isEdits: false,
        isCompleted:false
    }
    store.push(dataObj);

    // local storage

    localStorage.setItem("todos",JSON.stringify(store));

    document.querySelector("#todoVal").value = "";
    read_Todo();
})

const read_Todo = ()=>{
    const mainDiv = document.querySelector("#todo_list");

    mainDiv.innerHTML = "";

    store.forEach((el)=>{
        const todoDiv = document.createElement("div");
        const textTodo = document.createElement("h4");
        const input_is_completes = document.createElement("input");
        const btn_edits = document.createElement("button");
        const btn_delete = document.createElement("button");

        textTodo.innerText = el.todo;

        input_is_completes.type = "checkbox";    
         
       // this is edit element start

       const inputEdit= document.createElement('input')
       const btn_cancel= document.createElement('button')
       const btn_confirm= document.createElement('button')

       inputEdit.value = el.todo;
       inputEdit.name = "change_edit_input"

       btn_cancel.innerText ="Cancel";
       btn_confirm.innerText = "Confirm "

       // this is edit element end

       textTodo.innerText = el.todo;

       input_is_completes.type = "checkbox";
       input_is_completes.name = "completes_input"


        todoDiv.className = "todo_divs";

        btn_delete.innerText = "delete";
        btn_delete.className = "btn_isDelete";

        // delet function

        btn_delete.addEventListener('click',()=>{
            deleteFuction(el.id);
        })


        btn_edits.innerText = "edit";
        btn_edits.className = "btn_isEdit";


        btn_cancel.addEventListener("click",()=>{
            cancelHandle(el.id);
        })

        // logic to hide

        textTodo.className = el.isEdits ? "hideData" : "showData";
        inputEdit.className = el.isEdits ? "showData" : "hideData";

        // btn logic

        btn_edits.className = el.isEdits ? "hideData" : "showData btn_isEdit";
        btn_cancel.className = el.isEdits ? "showData btn_isDelete": "hideData";

        btn_delete.className = el.isEdits ? "hideData" : "showData btn_isDelete";
        btn_confirm.className = el.isEdits ? "showData btn_isEdit": "hideData";

        btn_edits.addEventListener('click',()=>{
            editFunction(el.id);
        })

        todoDiv.append(input_is_completes, textTodo, inputEdit, btn_edits,  btn_delete, btn_cancel, btn_confirm);
        mainDiv.append(todoDiv)

    });
}

     const cancelHandle = (id)=>{
        const editData = store.map((el) => {
            return el.id === id ? { ...el, isEdits: false} : el
        })
        store = editData;
        localStorage.setItem("todos",JSON.stringify(store));
        read_Todo();
     }

     const editFunction = (id) =>{
        const editData = store.map((el)=>{
            return el.id === id ? {...el, isEdits:true}:el;
        })
        console.log('🚀 ~ editData:', editData);
        store = editData;
        localStorage.setItem("todos",JSON.stringify(store));
        read_Todo();
     }

   const deleteFuction = (id) => {
    const updateDel = store.filter((el)=> el.id !== id);

    store = updateDel;
     localStorage.setItem("todos",JSON.stringify(store))
    read_Todo();
    // console.log('🚀 ~ updateDel:', updateDel);

   }
  

window.onload = ()=>{
    read_Todo()
}

