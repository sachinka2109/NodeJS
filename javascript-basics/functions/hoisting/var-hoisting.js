console.log(x); // undefined
var x = 10;
console.log(x); // 10


console.log(y); 
var y = 'Hello, world!';


hoisting();
function hoisting() {
    var x = 15;
    console.log(x); // 10
}


variable();  //error
var variable = function() {
    console.log('variable');
}
variable(); //variable


