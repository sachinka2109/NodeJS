/* 
Sum of Array:
Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

Largest Number in Array:
Write a function that takes an array of numbers as input and returns the largest number in the array.

Smallest Number in Array:
Write a function that takes an array of numbers as input and returns the smallest number in the array.

Average of Array:
Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

Reverse Array:
Write a function that takes an array as input and returns a new array with the elements in reverse order.

Remove Duplicates:
Write a function that takes an array as input and returns a new array with all the duplicate elements removed.

Find Index of Element:
Write a function that takes an array and a target element as input and returns the index of the first occurrence of the target element in the array. If the element is not found, return -1.

Count Occurrences:
Write a function that takes an array and a target element as input and returns the number of times the target element appears in the array.

Check if Array is Sorted:
Write a function that takes an array of numbers as input and returns true if the array is sorted in non-decreasing order, and false otherwise.

Merge Arrays:
Write a function that takes two arrays as input and returns a new array that contains all the elements from both arrays.
*/

/********************************  Solutions  ********************************/

array = [1, 2, 3, 4, 5, 6, 7];

// Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

// array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sumArray(arr) {
//     return arr.reduce((x,y) => x + y);
// }

// console.log(sumArray(array));


// Write a function that takes an array of numbers as input and returns the largest number in the array.

// array = [1, 2, 3, 4, 5, 6, 7];

// function largestNumber(arr) {
//     return Math.max(...arr);
// }

// console.log(largestNumber(array));

// Write a function that takes an array of numbers as input and returns the smallest number in the array.

// array = [1, 2, 3, 4, 5, 6, 7];

// function largestNumber(arr) {
//     return Math.min(...arr);
// }

// function largestNumber(arr) {
//     arr.filter((x,i) =>  x[i] > x[i + 1]);
// }

// console.log(largestNumber(array));

// Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

// array = [1, 2, 3, 4, 5, 6, 7];

// function averageNumber(arr) {
//     sum = arr.reduce((x,y) => (x+y));
//     average = sum/arr.length
//     return average;
// }

// function averageNumber(arr) {
//     let sum =0;
//     arr.forEach((x) => {
//         sum +=x;
//         return sum;
//     })
//     average = sum/arr.length;
//     return average;
// }

// console.log(averageNumber(array));

// Write a function that takes an array as input and returns a new array with the elements in reverse order.

// function reverseArray(arr) {
//     let newArray;
//     return newArray = arr.reverse();
// }
// console.log(reverseArray(array));

// function reverseArray(arr) {
//     let newArray = [];
//     for(let i = arr.length-1; i>=0; i--) {
//         newArray.push(arr[i]); 
//     }
//     return newArray;
// }
// console.log(reverseArray(array));


// Write a function that takes an array as input and returns a new array with all the duplicate elements removed.
// let array = [1,1,2,3,4,3,2,4,5];
// function removeDuplicates(arr) {
//     return arr.filter((x,i,arr) => arr.indexOf(x) == i);
// }
// console.log(removeDuplicates(array));


// Write a function that takes an array and a target element as input and returns the index of the first occurrence of the target element in the array. If the element is not found, return -1.
