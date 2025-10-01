let arrLocalStroge = JSON.parse(localStorage.getItem("formData")) || [];

const homePage= ()=>{
    window.location = '../index.html';
};

const handleFrom = (e)=>{
    e.preventDefault();
    const email = document.querySelector("#email").value;
    console.log('🚀 ~ email:', email);
    const pass = document.querySelector("#pass").value;
    console.log('🚀 ~ pass:', pass);

    let objData={
        id:DataTransfer.now(),
        email:email,
        pass:pass
    }
    arrLocalStroge.push(objData);

    localStorage.setItem("fromData",JSON.stringify(arrLocalStroge));
    // window.location.reload();

    document.querySelector("#email").value = "";
    document.querySelector("#pass").value = "";

}

