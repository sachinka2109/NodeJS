// var globalVar = "I am a global variable";

// function globalFunction() {
//   console.log(globalVar); // Accessible
// }

// console.log(globalVar); // Accessible


// function myFunction() {
//     if (true) {
//       let blockVar = "I am a block-scoped variable";
//       console.log(blockVar); // Accessible
//     } 
//     console.log(blockVar); // Undefined or ReferenceError
// }
// myFunction();


// function outerFunction() {
//     var outerVar = "I am an outer variable";
  
//     function innerFunction() {
//       console.log(outerVar); // Accessible
//     }
//     return innerFunction;
// }
  
// var closure = outerFunction();
// closure(); // Accesses outerVar via closure
  

var myModule = (function() {
var privateVar = "I am a private variable";

function privateFunction() {
    console.log(privateVar); // Accessible
}

return {
    publicFunction: function() {
    console.log(privateVar); // Accessible
    }
};
})();

console.log(privateVar); // Undefined or ReferenceError
myModule.publicFunction(); // Accesses privateVar via module
  