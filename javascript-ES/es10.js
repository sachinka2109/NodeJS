/* 

Added the flat() method and flatMap() method of Array ✅
Added trimStart() method and trimEnd() method of String ✅
Object.fromEntries() 
Symbol.prototype.description
String.prototype.matchAll
Function.prototype.toString() now returns exact characters, including spaces and comments
Simplify try {} catch {} and modify the catch binding
New basic data type BigInt
globalThis
import()
Legacy RegEx
Private instance methods and accessors

*/

/*********** flat() method and flatMap() ************/

// Example:

const nestedArray = [1, [2, [3, [4]], 5]];
const flattenedArray = nestedArray.flat();
// console.log(nestedArray.slice(0,1));
// console.log(nestedArray.splice(0,1));

console.log(flattenedArray);

// Example:

const nestedArray1 = [1, [2, [3, [4]], 5]];
const flattenedArrayDepth2 = nestedArray.flat(2);

console.log(flattenedArrayDepth2); // Output: [1, 2, 3, [4], 5]


// Example:

var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// Only "flatten" the array returned by the function in flatMap
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

// Example :

const numbers = [1, 2, 3, 4, 5];
const multipliedAndFlattened = numbers.flatMap(num => [num, num * 2]);

console.log(multipliedAndFlattened)

/* 
Output:
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
*/

/*********** trimStart() method and trimEnd() ************/

// Example :
const text = '    Hello, World!    ';
const trimmedStart = text.trimStart();
const trimmedEnd = text.trimEnd();
console.log(trimmedStart); // Output: 'Hello, World! '
console.log(trimmedEnd); // Output: '    Hello, World!'

// Example:

const text1 = '***Hello, World!***';
const trimmedStart1 = text.trimStart('*');
const trimmedEnd1 = text.trimEnd('*');
console.log(trimmedStart1);
console.log(trimmedEnd1);


// Example:

const text2 = '***Hello, World!---';
const trimmed2 = text.trimStart('*').trimEnd('-');
console.log(trimmed2);

// Example:

const multiline = `
  Hello, World!
  How are you today?  
`;

const trimmed = multiline.trimStart().trimEnd();
console.log(trimmed);