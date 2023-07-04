
console.log(a); // shows undefined because it wasnt declared

var a = 10;

console.log(a);

let add = () => {
    a++;
    console.log(a); 
    {
        a++;
        console.log(a); 
    }
    return a;
}

{
    a++;
}

console.log(add());

// Example 2:

// Example 3:

// Example 4:

// Example 5:

// Example 6: