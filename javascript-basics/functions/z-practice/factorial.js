// Factorial: Write a function to calculate the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

// function factorial(number) {
//     let result = 1;
//     for(let i = 1; i <= number; i++) {
//         if(number === 0 || number === 1){
//             return 1;
//         } else {
//             result *= i;
//         }
//     }
//     return result;
// }

// console.log(factorial(4));


// Using reduce 

function factorial(n) {
    if(n === 0 || n === 1) {
        return 1;
    } else {
        return Array.from({ length: n }, (_, index) => index + 1)
            .reduce((accumulator, currentValue) => accumulator * currentValue, 1)
    }
}
console.log(factorial(4));

// Recursion 

// function recursionFactorial(n) {
//     if(n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * recursionFactorial(n - 1);
//     }
// }

// console.log(recursionFactorial(3));