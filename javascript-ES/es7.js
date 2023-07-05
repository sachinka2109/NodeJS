/* 
1. includes() ✅
2. index operator -> ** ✅
*/


/****************  includes() ****************/
// Example 1:
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.includes("fox")); // true


// Example 2:
let arr2 = ["python","javascript","Angular"];

if(arr2.includes('python')) {
    console.log('It is in an Array');
} else {
    console.log('It is not in an Array');
}

// example 3
let arr = ["Python","Javascript","Angular","Nodejs"];  

if(arr.includes('python')) {
    console.log('It is in an Array');
} else {
    console.log('It is not in an Array');
}


// example 4:
const products = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Carrot", category: "Vegetable" }
  ];
  console.log(products.some(product => product.name.includes("ana")));
  

// example 5 :

const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet.has(3)); 

/****************  Index Operator ****************/

console.log(2 ** 3); // 8 (2 raised to the power of 3)

const num = 5;
console.log(num ** 2); // 25 (5 squared)

console.log(10 ** -2); // 0.01

const base = 2;
const exponent = 4;
console.log(base ** exponent); // 16

console.log((3 + 4) ** 2); // 49 (7 squared)
