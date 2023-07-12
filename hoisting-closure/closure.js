//  Closure is accessing the variables from the lexical scope
//  Closure is a function that is bind together with its lexical environment
//  When  there is a parent scope,the parent scope is a lexical scope for child scope.
//  A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.

// let text = 'My name is Sachin';
// function closure() { //Parent scope  //This is the lexical scope for function another.
//     let text1 = 'Hello world';
//     function another() { // Child scope 
//         // let text2 = 'Hello from Another';
//         console.log(text);
//         console.log(text1);
//     }
//     another();
//     console.log(text)
//     // console.log(text2)
// }
// closure();


// function outer() {
//     var outerVariable = 'I am from outer';
  
//     function inner() {
//       console.log(outerVariable);
//     }
  
//     return inner;
//   }
//   var closureFunc = outer();
// closureFunc(); 




// function myFunction(num1) {
//     return function increaseNumber(num2) {
//        console.log(num1 + num2);
//     }
// }
// var myNumber = myFunction(2);
// myNumber(4);

// function outer(x) {
//     return function inner(y) {
//       console.log(x + y);
//     };
//   }
  
// var closureFunc = outer(5);
// closureFunc(3);



// function x() {
//     let a = 10;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();


// let a = (x) => {
//   let b = (y) => {
//     console.log(x ** y);
//   }
//   return b;
// }
// var c = a(3);
// c(3);



// function createFunctions() {
//   var result = [];
  
//   for (var i = 0; i < 5; i++) {
//     result.push(function(){
//       console.log(i)
//     });
//   }
//   return result;
// }

// var functions = createFunctions();
// for(let j = 0; j < functions.length; j++) {
//   functions[j]();
// }



// tricky question


// for(var i = 0;i < 3 ;i++) {
//     const log = () => {
//         let a = 10;
//         console.log(i) //3 3 3
//     }
//     log();
//     setTimeout(log,100);
// }

// for (var i = 0; i < 3; i++) {
//     const log = (num) => {
//         return () => {
//             console.log(num);
//         };
//     }
//     setTimeout(log(i), 100);
// }
