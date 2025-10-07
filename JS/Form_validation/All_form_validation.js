function myform(e){
    e.perventdefault();
    let userName = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("confpass").value;
    let mobile = document.getElementById("mobile_number").value;
    let email = document.getElementById("email").value;

// user validation
    if(userName == ""){
        document.getElementById("username_msg").innerHTML= "** please fill the userName field";
        document.getElementById("usernmae_msg").style.color = "red";
        return false; 
    } else if (userName.length <= 2 || userName.length > 20){
        document.getElementById("username_msg").innerHTML = " ** Plese enter the length between 2 to 20"
        document.getElementById("username_msg").style.color ="red"
    }


}