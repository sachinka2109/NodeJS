// declaring a let 

let a = 10;

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

console.log(add());