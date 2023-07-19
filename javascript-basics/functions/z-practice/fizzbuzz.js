// FizzBuzz: Write a program that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

// function fizzBuzz(number) {
//     if (number % 3 === 0 && number % 5 === 0) {
//       return 'FizzBuzz';
//     } else if (number % 3 === 0) {
//       return 'Fizz';
//     } else if (number % 5 === 0) {
//       return 'Buzz';
//     } else {
//       return number;
//     }
//   }
  
//   for (let i = 1; i <= 100; i++) {
//     console.log(fizzBuzz(i));
//   }

// for (let i = 1; i <= 100; i++) {
//     switch (true) {
//       case (i % 3 === 0 && i % 5 === 0):
//         console.log('FizzBuzz');
//         break;
//       case (i % 3 === 0):
//         console.log('Fizz');
//         break;
//       case (i % 5 === 0):
//         console.log('Buzz');
//         break;
//       default:
//         console.log(i);
//     }
// }

// for(let i = 0;i < 100; i++) {
//     let result = (i% 3 === 0 && i%5 === 0) ? 'FizzBuzz' : (i % 3 === 0) ? 'Fizz' : (i % 5 === 0) ? 'Buzz' : i;
//     console.log(result);
// }



