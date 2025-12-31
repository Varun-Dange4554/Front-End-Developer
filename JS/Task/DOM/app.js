// let el = document.getElementById("demo")
// let paramElement = document.getElementById("parm1")

// console.log('🚀 ~ el:', el.innerHTML);  // object //🚀 ~ el: welcome <span> varun</span>  
// console.log('🚀 ~ el:', el.innerText);  // object // welcome varun


// console.log('🚀 ~ paramElement:', paramElement);



// let input = document.querySelector("#t1")
// console.log('🚀 ~ input:', input);

//   input.placeholder="enter your name"


// let allliElement = document.querySelectorAll("li")

// allliElement.forEach((items,index)=>{
//     console.log(items.innerHTML)
    
    
// })
// console.log('🚀 ~ alllielement:', alllielement);
// console.log(allliElement[0].innerHTML)

// console.log(allliElement[1].innerHTML)



/*


let inputElementPass = document.querySelector("#pass")

let  inputElementbtn = document.querySelector("#btn")

function showHidePassword(){

    if(inputElementbtn.innerHTML=="show"){
        inputElementPass.type="text"
        inputElementbtn.innerHTML="hide"

    }
    else{
          inputElementPass.type="password"
        inputElementbtn.innerHTML="show"
    }
    }  */


    let inputElementPass = document.querySelector("#pass")

   let  inputElementbtn = document.querySelector("#btn")


   inputElementbtn.addEventListener("click",()=>{
    
    if(inputElementbtn.innerHTML=="show"){
        inputElementPass.type="text"
        inputElementbtn.innerHTML="hide"

    }
    else{
          inputElementPass.type="password"
        inputElementbtn.innerHTML="show"
    }

   })