//  All ES-6 Examples

//1. class ✅
// 2.module 
// 3.arrow-function ✅
// 4.Function parameter default value ✅
// 5.Template literal ✅
// 6.Destructuring assignment ✅
// 7.Spread operator ✅
// 8.Object property shorthand  
// 9.Promise ✅
// 10.let, const to replace var ✅


/****************  Class ****************/

// // Example 1a: We Make a class named Animal and log the results

class Animal {
    constructor(name,color,breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }
    // This is a property on the prototype chain
    toString() {
        console.log('name:' + this.name + ', color:' + this.color + ', breed:' + this.breed);
    }
}

var animal = new Animal('Cory','white','Labrador');
animal.toString();

// /* 
// OUTPUT :
// name:Cory, color:white, breed:Labrador
// */


// // Example 1b: We create a new class named Cat and use extends to inherit from Animal

class Cat extends Animal {       //Animal class becomes the parent class
    constructor(action){        //action parameter to get all the actions from the parent class
        super('perry', 'white', 'ragdoll')  //We need to add super so that we can refer to the parent class
        this.action = action;
    }
    toString() {
        console.log(super.toString());
    }
}

var cat = new Cat('catch')
cat.toString();

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

class Vehicle {
    constructor(type,name, color,brand){
        this.type = type;
        this.name = name;
        this.color = color;
        this.brand = brand;
    }
    toString() {
        console.log('type :'+ this.type + ', name:' + this.name + ', color:' + this.color + ',brand:'+ this.brand);
    }
}

var vehicle = new Vehicle('school bus','xyz','yellow','JCBL')
vehicle.toString();

class Car extends Vehicle {
    constructor(action) {
        super('car','Mustang-GT','red','Ford')
        this.action = action;
    }
    toString() {
        console.log(super.toString());
    }
}

var car = new Car('endevour');
car.toString();

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

class Pen {
    constructor(name,color,price) {
        this.name = name;
        this.color = color; 
        this.price = price;
    }
    showPrice() {
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

const pen1 = new Pen("Marker", "Blue", "$3");
pen1.showPrice();


// // Example 4: 

function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

const pen2 = new Pen("Marker", "Blue", "$3");

Pen.prototype.showPrice = function(){                               // We use prototype to add new function to constructor
    console.log(`Price of ${this.name} is ${this.price}`);          // prototype saves data.
}

pen2.showPrice();


// Example 5:

class Chair {
    constructor(color,isMovable) {
        this.color = color;
        this.isMovable = false;
    }
    moveChair(){}; 
}

const newChair = new Chair();
newChair;

class OfficeChair extends Chair {
    constructor(color,isMovable) {
        super();
        this.type = 'officechair';
        this.color = color;
        this.isMovable = true;
    }

    moveChair(x,y){
        console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
    }
}


const newOfficeChair = new OfficeChair("Red", true, 30, 30);
newOfficeChair.moveChair(10,20);



/****************  Default Parameters  ****************/

// Functions with default values in parameters

function example(height = 50, width = 40) { 
    const newH = height * 10;
    const newW = width * 10;
    console.log(newH + newW);
}

example(); 

// Example : Giving a default value to params

let subtractNums = (a= 10,b = 15) => {
    return c = b - a;
}

console.log(subtractNums());


// Example : Changing the value of params when calling a function

let multiplyNums = (a= 10,b = 15) => {
    return c = b * a;
}

console.log(multiplyNums(20,30)); 
//The default values will be replaced with new values

// Example : 

function divideNumbs(a = 15, b=30) {
    return b/a;
}

console.log(divideNumbs(5));

/****************  Template Literals  ****************/


// Lets add template literals to the code

// Example:
const firstName = 'Sachin';
const lastName = 'Kaythamwar';

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Example:

let price1= 20;
let price2= 10;

let totalprice = `${price1 * price2}`;
console.log(totalprice);

// Example:
let array = ["template literals", "javascript", "es6"];

for (item of array) {
    console.log(`${item}`)
}

/****************  Spread Operator ****************/

// Allow JavaScript to easily get content from arrays and objects.

// example:

let numbers = [1,2,3,4,5];

let newArray = [...numbers];
let [a,b,...rest] = numbers;
console.log(a,b,rest);

// Example: concatenating

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);


// Example : array

const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(copyArray); 


// Example : function Arguments

function greet(name, age) {
    console.log(`Hello ${name}! You are ${age} years old.`);
}

const person = ['John', 30];
greet(...person); 

// Example : Objects

const originalObj = { a: 1, b: 2, c: 3 };
const modifiedObj = { ...originalObj, b: 5 };
console.log(modifiedObj);

// Example:

let strings = ['Angular','Bootstrap','Mongodb','Express','Nodejs'];

const [one,two,three] = strings;
console.log(one,two,three);

const [first, , , , final] = strings;
console.log(`first:${first} and final: ${final}`);
