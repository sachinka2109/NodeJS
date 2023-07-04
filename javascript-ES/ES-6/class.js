// Class

// // Example 1a: We Make a class named Animal and log the results

// class Animal {
//     constructor(name,color,breed) {
//         this.name = name;
//         this.color = color;
//         this.breed = breed;
//     }
//     // This is a property on the prototype chain
//     toString() {
//         console.log('name:' + this.name + ', color:' + this.color + ', breed:' + this.breed);
//     }
// }

// var animal = new Animal('Cory','white','Labrador');
// animal.toString();

// /* 
// OUTPUT :
// name:Cory, color:white, breed:Labrador
// */


// // Example 1b: We create a new class named Cat and use extends to inherit from Animal

// class Cat extends Animal {       //Animal class becomes the parent class
//     constructor(action){        //action parameter to get all the actions from the parent class
//         super('perry', 'white', 'ragdoll')  //We need to add super so that we can refer to the parent class
//         this.action = action;
//     }
//     toString() {
//         console.log(super.toString());
//     }
// }

// var cat = new Cat('catch')
// cat.toString();

// console.log(cat instanceof Cat); // true
// console.log(cat instanceof Animal); // true


/* 
OUTPUT:
name:Cory, color:white, breed:Labrador
name:perry, color:white, breed:ragdoll
undefined
true
true
*/


// // Example 2 : Creating a parent class Vehicle and a child class Car.

// class Vehicle {
//     constructor(type,name, color,brand){
//         this.type = type;
//         this.name = name;
//         this.color = color;
//         this.brand = brand;
//     }
//     toString() {
//         console.log('type :'+ this.type + ', name:' + this.name + ', color:' + this.color + ',brand:'+ this.brand);
//     }
// }

// var vehicle = new Vehicle('school bus','xyz','yellow','JCBL')
// vehicle.toString();

// class Car extends Vehicle {
//     constructor(action) {
//         super('car','Mustang-GT','red','Ford')
//         this.action = action;
//     }
//     toString() {
//         console.log(super.toString());
//     }
// }

// var car = new Car('endevour');
// car.toString();

// console.log(car instanceof Car);
// console.log(car instanceof Vehicle);

// /* 
// OutPUT:

// type :school bus, name:xyz, color:yellow,brand:JCBL
// type :car, name:Mustang-GT, color:red,brand:Ford
// undefined
// true
// true
// */ 

// Example 3 :

// class Pen {
//     constructor(name,color,price) {
//         this.name = name;
//         this.color = color; 
//         this.price = price;
//     }
//     showPrice() {
//         console.log(`Price of ${this.name} is ${this.price}`);
//     }
// }

// const pen1 = new Pen("Marker", "Blue", "$3");
// pen1.showPrice();


// // Example 4: 

// function Pen(name, color, price) {
//     this.name = name;
//     this.color = color;
//     this.price = price;
// }

// const pen1 = new Pen("Marker", "Blue", "$3");

// Pen.prototype.showPrice = function(){                               // We use prototype to add new function to constructor
    // console.log(`Price of ${this.name} is ${this.price}`);          // prototype saves data.
// }

// pen1.showPrice();


// Example 5:

// class Chair {
//     constructor(color,isMovable) {
//         this.color = color;
//         this.isMovable = false;
//     }
//     moveChair(){}; 
// }

// const newChair = new Chair();
// newChair;

// class OfficeChair extends Chair {
//     constructor(color,isMovable) {
//         super();
//         this.type = 'officechair';
//         this.color = color;
//         this.isMovable = true;
//     }

//     moveChair(x,y){
//         console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
//     }
// }


// const newOfficeChair = new OfficeChair("Red", true, 30, 30);
// newOfficeChair.moveChair(10,20);
