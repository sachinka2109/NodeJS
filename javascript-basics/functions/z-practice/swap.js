// Code for swapping 2 variables without creating a 3rd variable

let a = 5,b = 6;
b = b + a;
a = b - a;
b = b - a;

console.log(a,b);

function swap(a,b) {
    b = b + a;
    a = b - a;
    b = b - a;
    console.log(a,b);
}

swap (16,17);