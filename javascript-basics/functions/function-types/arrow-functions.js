
// We are going to write a arrow function in this code
// Example 1:
addNumbers = (a,b) => { // we use name and in paranthesis we set parameters while using a big arrow function 
    return a+b;  // returning the added value
}

console.log(addNumbers(5,6)); 


// example:
const multiply = (a, b) => {
    return a * b;
  };
  
  console.log(multiply(2, 3));


// Example:

const square = x => x * x;

console.log(square(5)); 

// Example: arrow function as callback

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); 