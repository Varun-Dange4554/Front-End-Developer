const BASE_URL= `https://jsonplaceholder.typicode.com/comments`;

const apicalling =async ()=>{
  try{
    let data = await fetch(BASE_URL);
    let res = await  data.json();
    console.log(`res`,res);
    res.map((els)=>{
    alert(
        `postId ${els.postId}
         id: ${els.id}
         name: ${els.name}
         email ${email}
         body ${body}
        `
    )
    });
  } 
  catch (error){
    console.log(`error`,error);
  }

}
// apicalling()