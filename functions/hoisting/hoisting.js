console.log(x); // undefined
var x = 5;

foo(); // "Hello, World!"
function foo() {
  console.log("Hello, World!");
}

foo(); // TypeError: foo is not a function
var foo = function() {
  console.log("Hello, World!");
};

function outer() {
        console.log(inner); // undefined
        var inner = "Hello, Inner!";
    }
outer();


console.log(x); // ReferenceError: x is not defined
let x = 5;