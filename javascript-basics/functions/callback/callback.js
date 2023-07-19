// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback();
//   }
  
//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }
  
//   greet("Alice", sayGoodbye);

// Example 2:
// function myDisplayer(somevalue) {
//   console.log(somevalue);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5,5,myDisplayer);


// Example 3:

// const array = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// let calculation = displayNumbers(array, (x) => x >=10);

// function displayNumbers(numbers,callback) {
//   const newArray = [];
//   for(const x of numbers) {
//     if(callback(x)) {
//       newArray.push(x);
//     }
//   }
//   return newArray;
// }
// console.log(calculation);

