// A Higher order functions are those functions that takes another function as an argument or returns it.

// Example1: Simple function that takes a function as an argument

function greet(name) {
    console.log(`hii ${name}`);
}

function anotherFunction(greet) {
    greet('sachin');
}

anotherFunction(greet);


// function greet(greeting) {
//     return function(name) {
//       console.log(`${greeting}, ${name}!`);
//     };
//   }
  
// const greetHello = greet("Hello");
// greetHello("John");

function createCounter() {
    let count = 0;
  
    return function() {
      return ++count;
    };
  }
  
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
  



const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2); //takes callback function
console.log(doubled); 

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); 

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 

numbers.forEach((num) => console.log(num * 2));