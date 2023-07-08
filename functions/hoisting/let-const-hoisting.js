console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10

//function hoisting

hello(); // "Hello, World!"

function hello() {
  console.log("Hello, World!");
}



