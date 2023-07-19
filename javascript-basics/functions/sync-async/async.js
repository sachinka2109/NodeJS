// Handling Browser API/Web-API

// function printMe() {
//     console.log('print me');
//   }
  
// setTimeout(printMe, 2000);

//first setTimeout will be called then function printMe will be executed.

// function printMe() {
//     console.log('print me');
//   }
  
//   function test() {
//     console.log('test');
//   }
  
//   setTimeout(printMe, 2000);
//   test();

/* 
Output:
test
printMe
*/




// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function main() {
//     console.log('main');
    
//     setTimeout(f1, 0);
    
//     f2();
// }

// main()

/* 
Output: 
main
f2
f1
*/