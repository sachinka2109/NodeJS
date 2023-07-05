/* 
async/await ✅
Object.values() ✅
Object.entries() ✅
String padding: padStart() and padEnd(), the padding string reaches the current length
Comma is allowed at the end of function parameter list
Object.getOwnPropertyDescriptors()
*/ 

/****************  Object.values() and Object.entries ****************/

var obj = { foo: "bar", baz: 42 };
console.log(Object.keys(obj));
// ["foo", "baz"]

var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj));
// ["bar", 42]

var obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj));
// [ ["foo", "bar"], ["baz", 42] ]


const obj1 = {a: 1, b: 2, c: 3}
for(let [key,value] of Object.entries(obj1)){
    console.log(`key: ${key} value:${value}`)
}
//key:a value:1
//key:b value:2
//key:c value:3

const person = {
    name: 'sachin',
    age: 22,
    city: "Mumbai"
}

// Example:

const value = Object.values(person);
console.log(value)
// Output: ["sachin", 22, "Mumbai"]

// Example :
const numbers = {
    a: 10,
    b: 20,
    c: 30
};
  
const sum = Object.values(numbers).reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// Output: 60 
  
// Example :

const student = {
    name: "Alice",
    grade: "A",
    age: 18
};
  
Object.values(student).forEach(value => {
console.log(value);
});
// Output: "Alice", "A", 18
  
//   Example :

const prices = {
    apple: 0.5,
    banana: 0.25,
    orange: 0.3
};
  
const priceList = Object.values(prices).map(price => `$${price.toFixed(2)}`);
console.log(priceList);
// Output: ["$0.50", "$0.25", "$0.30"]
  

/****************  Examples for Object.entries  *****************/

// Example: converting object properties to array

const fruit = {
    name: "Apple",
    color: "Red",
    quantity: 10
};
  
const entries = Object.entries(fruit);
console.log(entries);
// Output: [["name", "Apple"], ["color", "Red"], ["quantity", 10]]

// Example: loop for an object's keys and values

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2021
};
  
Object.entries(car).forEach(([key, value]) => {
console.log(`${key}: ${value}`);
});
// Output: "brand: Toyota", "model: Camry", "year: 2021"
  
// Example: Array of key-value pairs

const data = [
    ["name", "John"],
    ["age", 25],
    ["city", "London"]
];
  
const persondata = Object.fromEntries(data);
console.log(persondata);
// Output: { name: "John", age: 25, city: "London" }
  