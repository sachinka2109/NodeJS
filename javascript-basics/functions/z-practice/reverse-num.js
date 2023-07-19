/*

1. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223

*/


let reverse = (n) => {
    n = String(n);
    n = n.split("").reverse().join("");
    return n;
}

console.log(reverse(2345));