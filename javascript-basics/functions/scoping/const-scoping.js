function example() {
    const x = 10;
    if (x > 5) {
      const y = 20;
      console.log(x, y); // 10, 20
    }
    console.log(x, y); // ReferenceError: y is not defined
  }
  
  example();
  console.log(x, y); // ReferenceError: x is not defined, ReferenceError: y is not defined
  
