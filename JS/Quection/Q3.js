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
});