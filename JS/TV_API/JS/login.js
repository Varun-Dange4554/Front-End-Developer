let arrLocalStroge = JSON.parse(localStorage.getItem("formData")) || [];
// console.log('🚀 ~ arrLocalStroge:', arrLocalStroge);

const homePage= ()=>{
    window.location = '../index.html';
};

const handleFrom = (e)=>{
    e.preventDefault();
    const email = document.querySelector("#email").value;
    // console.log('🚀 ~ email:', email);
    const pass = document.querySelector("#pass").value;
    // console.log('🚀 ~ pass:', pass);

    let objData={
        id: Date.now(),
        email: email,
        pass: pass
    };
    arrLocalStroge.push(objData);

    localStorage.setItem("formData",JSON.stringify(arrLocalStroge));
    // window.location.reload();

    document.querySelector("#email").value = "";
    document.querySelector("#pass").value = "";

}

// let path = window.location.pathname;
// console.log('🚀 ~ path:', path);
