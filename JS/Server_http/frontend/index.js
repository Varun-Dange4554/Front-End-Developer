
const btn_Add = document.querySelector(".add_btn");

const api =`http://localhost:3000/todo`; // api_base_UI...

/*
   get - done
   post - done
   put
   patch
   delete

*/

let store = []
btn_Add.addEventListener("click", async()=>{
    const value_todo = document.querySelector("#todoVal").value.trim();
    if(!value_todo){
        alert("todo empty hai");
        return
    }
    

    const dataObj = {
        id: Date.now(),
        todo: value_todo,
        isEdits: false,
        isCompleted:false
    }
      try{
         res = await fetch(api,{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(dataObj)
        })

        const res = await fetch(api)
        store = await res.json()
        read_Todo()

        document.querySelector("#todoVal").value = ""
      }catch(error){
        console.log('🚀 ~ error:', error);
        
      }

    // store.push(dataObj);

    // local storage

    // localStorage.setItem("todos",JSON.stringify(store));

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
       inputEdit.name = "change_edit_input";

       btn_cancel.innerText ="Cancel";
       btn_confirm.innerText = "Confirm ";

       // this is edit element end

       textTodo.innerText = el.todo;

       input_is_completes.type = "checkbox";
       input_is_completes.name = "completes_input";


        todoDiv.className = "todo_divs";

        btn_delete.innerText = "delete";
        btn_delete.className = "btn_isDelete";

        // delet function

        btn_delete.addEventListener('click',async()=>{
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

   const deleteFuction =  async(id) => {
    try{
        // Delet request to back end server
        let res = await fetch(`${api}/${id}`,{
            method:"DELETE"
        });

        if(res.ok){
     store = store.filter(el=> el.id !== id);
     localStorage.setItem("todos",JSON.stringify(store))
     read_Todo();
        } else{
            console.error("Field to delete todo. status",res.status);
        }
        
    } catch(error){
          console.log('🚀 ~ error:', error);
          
    }
   };
  

window.onload = async ()=>{
    try {
        let res = await fetch(api);
         let data = await res.json();
        store = data;
         read_Todo()
    }catch(error){
        console.log('🚀 ~ error_onload:', error);
        
    }
}

