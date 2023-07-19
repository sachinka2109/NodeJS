const person = {
    firstname: 'sachin',
    lastname: 'kaythamwar',
    fullname: function(state,city) {
      return this.firstname + ' ' + this.lastname + ' ' + state + ' ' + city
    }
}

let persontwo = {
    firstname: 'Anna',
    lastname: 'Smith'
}

// Function borrowing 
console.log(person.fullname.call(person,'maharashtra','mumbai')) // passing args one by one seperately
console.log(person.fullname.apply(persontwo,['maharashtra','mumbai'])) // passing args in array list

let myName = person.fullname.bind(persontwo,'maharashtra','mumbai'); // returns a copy
console.log(myName());

// function fullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
// }

// person = {
//     firstName: 'John',
//     lastName: 'Smith',
// }

// personOne = {
//     firstName: 'Andy',
//     lastName: 'Smith'
// }

// fullName.call(person);
// fullName.call(personOne);
// fullname.apply(personOne);
// let name = fullname.bind(personOne);




// function greet(text = 'Have a good day') {
//     console.log(`Hello, ${this.name}!` + text);
//   }
  
// const person = { name: 'Alice' };
// const person2 = { name: 'Bob' };

// greet.call(person);  
// greet.apply(person,['You are doing great'])
// let compliment = greet.bind(person2,'you are the best');
// compliment();


// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getInfo() {
//     console.log(`Make: ${this.make}, Model: ${this.model},Year: ${this.year}`);
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model, year) {
//     super(make, model);
//     this.year = year;
//   }
// }

// const myCar = new Car('Toyota', 'Innova', 2023);

// myCar.getInfo.call(myCar);





const myArray = [1, 2, 3, 4, 5];
function printValues(separator, prefix) {
  for (let i = 0; i < this.length; i++) {
   console.log(prefix + separator + this[i]);
  }
}
printValues.call(myArray);
printValues.apply(myArray, [" ", "Value: "]);

// function printValues() {
//   const self = this; // Store the reference to 'this' context
//   return function() {
//     for (let i = 0; i < self.length; i++) {
//       console.log(self[i]);
//     }
//   };
// }
// const values = printValues.bind(myArray);
// values();



