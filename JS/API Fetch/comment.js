// const BASE_URL= `https://jsonplaceholder.typicode.com/comments`;

// const apicalling =async ()=>{
//   try{
//     let data = await fetch(BASE_URL);
//     let res = await  data.json();
//     console.log(`res`,res);
//     res.map((els)=>{
//     alert(
//         `postId ${els.postId}
//          id: ${els.id}
//          name: ${els.name}
//          email: ${els.email}
//          body: ${els.body}
//         `
//     )
//     });
//   } 
//   catch (error){
//     console.log(`error`,error);
//   }

// }
// apicalling();




// code 

const BASE_URL= `https://jsonplaceholder.typicode.com/comments`;
const product_Fetch=()=>{
  fetch(BASE_URL)
  .then((res)=>res.json())
  // .then((res)=>console.log(res))
  .then((res)=>Render_UI(res))
  .catch((err)=>console.log(err))
  .finally(()=>{console.log('Api fetch completed')})
}
// product_Fetch();

const Render_UI = (value)=>{
  let mainDiv = document.getElementById("mainContainer");
  value.map((element,index)=>{
    let textDiv = document.createElement('div');
 

let id = document.createElement('h3')
let name1 = document.createElement('h4')
let email = document.createElement('h5')
let body = document.createElement('p')

id.innerText = element.id;
name1.innerText = element.name1;
email.innerText = element.email;
body.innerText = element.body;

textDiv.className="text-Div";

textDiv.append(id,name1,email,body);
  mainDiv.append(textDiv);

 });
};