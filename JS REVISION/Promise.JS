// # Promise ->A promise is an object representing the eventual complete or failure of an asynchronous operations

//  # states of a promise
// $ Pending → Initial state
// $ Fulfilled → Success
// $ Fulfilled → Success

// Creating a Promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Error occurred");
  }
});

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task completed");
  }, 2000);
});

promise.then((msg) => console.log(msg));

let loginStastus = false;
let Promise = new Promise((res, rej) => {
  if (loginStastus) {
    res({ status: 1, msg: "Login Done" });
  } else {
    rej({ status: 0, msg: "Invalid user name password" });
  }
});
