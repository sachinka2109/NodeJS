//Write a program in javascript to find odd and even numbers;

array = [1,2,3,4,5,6,7,8,9];

function evenNumbers(array) {
    return array.filter((n) => {
        n % 2 === 0;
    })
}

function oddNumbers(array) {
    return array.filter((n) => {
        n % 2 !== 0;
    });
}

console.log(evenNumbers(array));
console.log(oddNumbers(array));