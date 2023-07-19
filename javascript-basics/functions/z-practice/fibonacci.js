// Fibonacci Sequence: Write a function to generate the Fibonacci sequence up to a given number n. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.


function Fibonacci(n) {
    for(let i = 0; i < n; i++) {
        if(n == 0) {
            return 0;
        }
        if(n == 1) {
            return 1;
        }
        if(n == 2) {
            return 1
        }
        return Fibonacci(n-1) + Fibonacci(n-2);
    }
}

console.log(Fibonacci(5));

function generateFibonacciSequence(n) {
    let sequence = [0, 1];
  
    while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= n) {
      let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);
    }
  
    return sequence;
  }
  
// Example usage:
let n = 5;
let fibonacciSequence = generateFibonacciSequence(n);
console.log(fibonacciSequence);