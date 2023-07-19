//  All The Array methods from javascript

const array1 = [1, 2, 3, 4, 5];
console.log(array1.length);  // 5
console.log(array1[2]);  //3
array1.forEach((item,i)=> { //items with i = index
    console.log(item,i);
})


const array = ["Nodejs","Mongodb","Angular","Express"];
array.push("chai"); //pushes a element in last position
console.log(array); 
array.pop("chai"); // removes the element 
console.log(array);
array.shift(); // removes the element at first position
console.log(array); 
array.unshift('Nodejs'); //adds the element at first position


const newArray = ["sachin","kiran","akhil"];
newArray.splice(1,1,"Ms.Smita");
console.log(newArray);
let anotherArray  = newArray.slice(1,2);
console.log(anotherArray);


const sentence = "Have a good day!";
console.log(sentence.split(''));

const sentence2 = 'Hello, world...';
console.log(sentence2.concat(sentence));



const cars = ["Ford","Lambhorghini","Porsche"];
let newcars = cars.join(',');
console.log(newcars);


const numbers = [1, 2, 3, 4, 5];
const joinedString = numbers.join('-');
console.log(joinedString);

newcars.toString();
console.log(newcars);


const newExample = ['a', 'b', 'c', 'd', 'e'];
console.log(newExample.length);
console.log(newExample[2]);
newExample.forEach((item,index) => {
    console.log(item,index)
})
newExample.push('foo');
console.log(newExample);

newExample.pop('c');
console.log(newExample);

newExample.shift();
console.log(newExample);

newExample.unshift('g');
console.log(newExample);

newExample.splice(0,1,'new');
console.log(newExample);

let another = newExample.slice(1,3);
console.log(another);


const newSentence = 'Another new sentence with new words';
console.log(newSentence.split(''));

const joined = newExample.join('');
console.log(joined);

const newString = newExample.toString();
console.log(newString);
