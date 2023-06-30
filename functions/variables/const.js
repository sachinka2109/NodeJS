// declaring a const 

const a = 10;

console.log(a);

let add = () => {
    a++;
    console.log(a); // Throws an error since const cannot be changed
}

console.log(add());

