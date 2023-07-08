// Problem: Find the largest number in an array using a function and ES6 syntax.

let array = [1, 2, 3, 4, 5, 10, 9, 8, 7];


let largestNumber = (number) => {
    return Math.max(...number); 
}

console.log(largestNumber(array));

// Problem: Implement a function that takes an array of numbers as input and returns a new array with only the even numbers.

function evenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

console.log(`even numbers: ${evenNumbers(array)}`);

// Problem: Create a promise-based function that simulates fetching data from an API and resolves with the data after a certain delay.

function fetchData(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let data = [1,2,3,4,5,6];
            resolve(data);
        }, 2000);
    });
}

fetchData().then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
})

// Problem: Implement an async function that uses await to fetch data from multiple APIs concurrently using Promise.all() and returns a combined result.

async function fetchData() {
    const promise1 = Promise.resolve('Api 1');
    const promise2 = Promise.resolve('Api 2');

    return await Promise.all([promise1, promise2]);
}

// Problem: Write a function that accepts a callback and a delay in milliseconds and executes the callback after the specified delay using setTimeout().

function testing(callback,delay) {
    setTimeout(callback,delay);
}

testing(() => {
    console.log('Testing');
},2000)


// Problem: Given an array of objects containing student names and their scores, write a function that returns an array of the top three students based on their scores.

function topStudent(students) {
    students.sort((a,b) => b.score - a.score);
    return students.slice(0,3);
}

let students = [
    {name: 'John',score: '86'},
    {name: 'Lina',score: '77'},
    {name: 'Sam',score: '96'},
    {name: 'Maverick',score: '99'},
];

console.log(topStudent(students));

// Problem: Implement a function that recursively flattens a nested array into a single-dimensional array.

function singleArray(array) {
    return array.reduce((flat,item) => {
        if(Array.isArray(item)) {
            return flat.concat(singleArray(item));
        }
        return flat.concat(item);
    },[]);
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(singleArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]