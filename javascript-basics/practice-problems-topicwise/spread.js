/* 
Problem 1: Concatenating Arrays
Write a function concatArrays that takes in two arrays as arguments and returns a new array that contains all the elements from both arrays using the spread operator.
*/

// function concatArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
// }
  
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const result = concatArrays(arr1, arr2);
// console.log(result); // Output: [1, 2, 3, 4, 5, 6]
  

/*
Problem 2: Merge Objects
Write a function mergeObjects that takes in two objects as arguments and returns a new object that merges the properties of both objects using the spread operator.
*/
// function mergeObjects(obj1, obj2) {
//     return {...obj1, ...obj2};
// }
  
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const result = mergeObjects(obj1, obj2);
// console.log(result); // Output: { a: 1, b: 2, c: 3, d: 4 }

/* 
Problem 3: Clone an Array
Write a function cloneArray that takes in an array as an argument and returns a new array that is a clone of the original array using the spread operator.
*/

// function cloneArray(arr) {
//     return [...arr];
//   }
  
// const originalArray = [1, 2, 3];
// const clonedArray = cloneArray(originalArray);
// console.log(clonedArray); // Output: [1, 2, 3]
  

// function mergeArrayOfObjects(arr) {
//     return arr.reduce((x,y) => ({...x,...y}))
// }
  
// const array = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const mergedObject = mergeArrayOfObjects(array);
// console.log(mergedObject); // Output: { a: 1, b: 2, c: 3 }


function mergeUniqueArray(...arrays) {
    const mergedArray = [].concat(...arrays);
    console.log(mergedArray); 
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const array3 = [3, 4, 5];
const mergedUniqueArray = mergeUniqueArray(array1, array2, array3);
console.log(mergedUniqueArray); // Output: [1, 2, 3, 4, 5]