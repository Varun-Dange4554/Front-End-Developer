
function myFunction(e) {
  e.preventDefault();

  let email = document.myForm.email.value;
  console.log("🚀 ~ email:", email);
  let pass = document.myForm.pass.value;
  console.log("🚀 ~ pass:", pass);

  if (email.indexOf("@") <= 0) {
    document.getElementById("Message").innerHTML = "Invalid Email By @";
    return false;
  } else if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("Message").innerHTML = "Invalid Email By Domain";
    return false;
  }

  if (pass !== null) {
    if (pass.trim() === "") {
      console.log(`Please Enter The Value`);
    } else if (pass.length > 8 && pass.length > 20) {
      console.log(`Please Enter The Correct Length...`);
    } else {
      const hasUpperCase = /[A-Z]/.test(pass);
      console.log("🚀 ~ hasUpperCase:", hasUpperCase);
      const hasLowerCase = /[a-z]/.test(pass);
      console.log("🚀 ~ hasLowerCase:", hasLowerCase);
      const hasNumber = /[0-9]/.test(pass);
      console.log("🚀 ~ hasNumber:", hasNumber);
      const hasSpecialChar = /[!@#$%^&*()]/.test(pass);
      console.log("🚀 ~ hasSpecialChar:", hasSpecialChar);

      if (!hasUpperCase) {
        document.getElementById("Message_pass").innerHTML =
          "Password must inclued at least one UpperCase Letter";
        return false;       
      } else if (!hasLowerCase) {
        document.getElementById("Messsage_pass").innerHTML =
          "Password must inclued at least one LowerCase Letter";
        return false;
      } else if (!hasNumber) {
        document.getElementById("Message_pass").innerHTML =
          "Password must inclued at least one Number";
        return false;
      } else if (!hasSpecialChar) {
        document.getElementById("Message_pass").innerHTML =
          "Password must inclued at least one SpecialChar";
        return false;
      } else {
        document.getElementById("Message_pass").innerHTML = "Password Is Valid";
      }
    }
  }
}