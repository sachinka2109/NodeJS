function example() {
    let x = 10;
    if (x > 5) {
      let y = 20;
      console.log(x, y); // 10, 20
    }
    console.log(x, y); // ReferenceError: y is not defined
  }
  
  example();
  console.log(x, y); // ReferenceError: x is not defined, ReferenceError: y is not defined

