// # Promise ->A promise is an object representing the eventual complete or failure of an asynchronous operations

//  # states of a promise
// $ Pending → Initial state
// $ Fulfilled → Success
// $ Fulfilled → Success

// Creating a Promise
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Data received");
//   } else {
//     reject("Error occurred");
//   }
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task completed");
//   }, 2000);
// });

// promise.then((msg) => console.log(msg));

/* 
let loginStatus = true;

let loginPromise = new Promise((res, rej) => {
  if (loginStatus) {
    res({ status: 1, msg: "Login Done" });
  } else {
    rej({ status: 0, msg: "Invalid user name password" });
  }
});

loginPromise
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
*/

// $async / await

async function checkLogin() {
  try {
    let data = await loginPromise; // wait karega jab tak promise resolve na ho
    console.log("Success:", data);
  } catch (err) {
    console.log("Error:", err);
  }
}

checkLogin();
