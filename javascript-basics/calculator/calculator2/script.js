// let result = document.getElementById('output');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateResult(input) {
  try {
    const result = eval(input);
    if(result === undefined) {
        return '';
    } else {
        console.log(result);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

rl.question('Enter the result to evaluate: ', (input) => {
  calculateResult(input);
  rl.close();
});

// let operation = prompt('Enter operation to perform : ');
// let result1 = prompt('Enter first number : ');
// let result2 = prompt('Enter second number : ');
// let result;

// function calculateResult() {
//     try {
//         switch(operation) {
//             case '+' : 
//                 result = +result1 + +result2;
//                 break;
//             case '-' : 
//                 result = +result1 - +result2;
//                 break;
//             case '*' : 
//                 result = +result1 * +result2;
//                 break;
//             case '/' : 
//                 result = +result1 / +result2;
//                 break;
//             default : 
//                 result = 'Error';
//         }
//         return window.alert(result);
//     } catch (error) {
//         result = 'Error';
//         window.alert(error);
//     }
// }

calculateResult();

// function appendNumber(number) {
//     result.value += number;
//     console.log('appendNumber1 :',result);
//     console.log('appendNumber2 : ',result.value);
// }

// function appendOperator(operator) {
//     result.value += operator;
//     console.log('appendOperator: ',operator);
// }

// function deleteNumber() {
//     result.value = result.value.slice(0, -1);
//     console.log('Delete Number:',result.value);
// }

// function clearResult(){
//     result.value = '';
// }