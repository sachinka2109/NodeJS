// function example() {
//     let x = 10;
//     if (x > 5) {
//       let y = 20;
//       console.log(x, y); // 10, 20
//     }
//     console.log(x, y); // ReferenceError: y is not defined
//   }
  
//   example();
//   console.log(x, y); // ReferenceError: x is not defined, ReferenceError: y is not defined

let a = 20;

function example2() {
  let b = 30;
  return a + b; // 50;
}

// c = a+b; //ReferenceError: b is not defined

console.log(example2());

