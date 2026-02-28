// What is Anonymous Function? -> An anonymous function is a function without a name.
function geting() {
  console.log("hello i am varun");
}

console.log("before");
setTimeout(geting, 1000);
console.log("after");

function add(a, b) {
  return a + b;
}

setTimeout(function () {
  console.log("Timer done");
}, 1000);

console.log(add(4, 23));
