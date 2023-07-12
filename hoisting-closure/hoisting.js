/* 
Hoisting is when a variable declaration is moved to the top of the code.
We can use the variable before it is declared.

Hoisting is whenever we declare and initalize a variable it goes into two phases:
1.Memory allocation
2.Initialization
*/


console.log(a); // undefined  (because during memory allocation only the declarations are getting a value of undefined)
var a = 10;
console.log(a); // 10

greet(); //Hello world (because the whole function is getting declared)
function greet(text) {
    console.log('Hello world' + " " + text); //
}
greet(); //Hello world 

console.log(myName); 
function greet(text) {
    return 'Hello world' + " " + text;
}
var myName = greet('I am sachin');
console.log(myName);


// Name(); //TypeError: Name is not a function
// var Name = function() {
//     console.log('This is a Name');
// }
// Name();  //This is a Name


// function myFunction() {
//     console.log(myVariable); // undefined
//     var myVariable = 20;
//     console.log(myVariable); // 20
// }
// myFunction();

// anotherFunction(); //TypeError: anotherFunction is not a function
var anotherFunction = () => {
    console.log('Hello from another function'); // undefined
}
anotherFunction(); //Hello from another function


// console.log(hoisting); //ReferenceError: Cannot access 'hoisting' before initialization
// let hoisting = 10;
// console.log(hoisting); //10

// console.log(hoisting1);  //ReferenceError: Cannot access 'hoisting1' before initialization
// const hoisting1 = 10;
// console.log(hoisting1); //10


// hoisting(); //ReferenceError: Cannot access 'hoisting' before initialization
// let hoisting = function() {
//     console.log('I am hoisted');
// }
// hoisting();  // I am hoisted

