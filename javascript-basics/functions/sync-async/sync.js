// Functions That execute one by one 

// function f1() {
//     console.log("F1");
// }

// function f2() {
//     console.log("F2");
// }

// function f3() {
//     console.log("F3");
// }

// Invoking the functions

// f1();
// f2();
// f3();

// O/p

/* 
F1
F2
F3
*/

// The function executes one by one simultaneously
// This Happens Because of CallStack.


//  Example2 :

// function f1() {
//     // Some code
//     console.log("F1");
//   }
//   function f2() {
//       f1();
//       console.log("F2");
//   }
//   function f3() {
//       f2();
//       console.log("F3");
//     }
//   f3();

/*  
Explanation :
First f3 will get invoked.
f3 has function f2 in it which gets executed,
f2 has function f1 in it which gets executed,
now f1 will be executed
f2 will be executed
f3 will be executed
*/



