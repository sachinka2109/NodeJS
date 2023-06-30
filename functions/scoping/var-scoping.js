function example() {
    var x = 10;
    if (x > 5) {
      var y = 20;
      console.log(x, y); // 10, 20
    }
    console.log(x, y); // 10, 20
  }
  
  example();
  console.log(x, y); // ReferenceError: x is not defined, ReferenceError: y is not defined
  