// Get form and input elements
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

 
  errorMsg.textContent = "";
  successMsg.textContent = "";

  
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const confirmPasswordVal = confirmPassword.value.trim();

 
  if (usernameVal === "" || emailVal === "" || passwordVal === "" || confirmPasswordVal === "") {
    errorMsg.textContent = "⚠️ All fields are required!";
    return;
  }

  if (usernameVal.length < 3) {
    errorMsg.textContent = "⚠️ Username must be at least 3 characters long.";
    return;
  }

  // email 
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailVal)) {
    errorMsg.textContent = "⚠️ Please enter a valid email address.";
    return;
  }

  // Password 
  if (passwordVal.length < 6) {
    errorMsg.textContent = "⚠️ Password must be at least 6 characters long.";
    return;
  }

  // Password match validation
  if (passwordVal !== confirmPasswordVal) {
    errorMsg.textContent = "⚠️ Passwords do not match.";
    return;
  }


  successMsg.textContent = "✅ Registration successful!";
  form.reset();
});
