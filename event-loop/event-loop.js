// Event Loop: Synchronous tasks are executed first,then promises and then browser api calls


// Example 1:

function testing() {
    setTimeout(() => {
        console.log('Function executed')
    }, 1000);   
}
testing();

setTimeout(() => {
    console.log('setTimeout executed')
}, 1000);

console.log('executed');

let promise = new Promise(function (resolve, reject) {
    resolve('Promise resolved')
})
promise.then(result => {
    console.log(result);
})

/* 
Output: 

executed
Promise resolved
Function executed
setTimeout executed
*/


// Example 2:

// console.log('Start');

// setTimeout(function() {
//   console.log('Timeout 1');
// }, 2000);

// setTimeout(function() {
//   console.log('Timeout 2');
// }, 1000);

// console.log('End');

/* 
Output: 
Start
End
Timeout 2
Timeout 1
*/

// Example 3 : for loop

// console.log('Start');

// for (let i = 0; i < 5; i++) {
//   console.log('Loop', i);
// }

// console.log('End');

/*
Output :
Start
Loop 0
Loop 1
Loop 2
Loop 3
Loop 4
End
*/

//Example 4: Recursive 

// function recursive (count) {
//     if(count >= 5) {
//         console.log('Finished');
//         return;
//     }

//     setTimeout(() => {
//         console.log(count);
//         recursive(count + 1);
//     }, 1000);
// }
// recursive(0);

/* 
Output:
0
1
2
3
4
Finished
*/

// Example 5:

// console.log('Sync task');

// setTimeout(() => {
//   console.log('hii');
// }, 2000);

// let promise = Promise.resolve('This is promise');
// promise.then((resolve)=> {
//   console.log(resolve);
// })

// setTimeout(() => {
//   console.log('hii too');
// }, 3000);


// Example 6:

