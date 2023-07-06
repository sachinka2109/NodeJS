// Promise.allSettled() Examples with conditions


// Example 1: When added setTimeOut to the resolve

// const promise = new Promise(function(resolve, reject) {
//     let bool = true;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('First Promise resolved successfully');
//         }, 1500);
//     } else {
//         reject('First rejected')
//     }
// });

// const promise1 = new Promise(function(resolve, reject) {
//     let bool = true;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('Second Promise resolved successfully');
//         }, 2000);
//     } else {
//         reject('Second rejected');
//     }
// })

// const promise2 = new Promise(function(resolve, reject) {
//     let bool = true;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('Third Promise resolved successfully');
//         }, 1000);
//     } else {
//         reject('Third rejected');
//     }
// })

// Promise.allSettled([promise,promise1,promise2]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

/* 
Output :
    [
  { status: 'fulfilled', value: 'First Promise resolved successfully' },
  {
    status: 'fulfilled',
    value: 'Second Promise resolved successfully'
  },
  { status: 'fulfilled', value: 'Third Promise resolved successfully' }
]
*/ 

// Example 2: When There is a reject in one of the promises 

// const promise = new Promise(function(resolve, reject) {
//     let bool = true;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('First Promise resolved successfully');
//         }, 1500);
//     } else {
//         reject('First rejected')
//     }
// });

// const promise1 = new Promise(function(resolve, reject) {
//     let bool = true;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('Second Promise resolved successfully');
//         }, 1000);
//     } else {
//         reject('Second rejected');
//     }
// })

// const promise2 = new Promise(function(resolve, reject) {
//     let bool = false;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('Third Promise resolved successfully');
//         }, 1000);
//     } else {
//         reject('Third rejected');
//     }
// })

// Promise.allSettled([promise,promise1,promise2]).then(result => {
//     console.log(result); 
// }).catch(err => {
//     console.log('Error is :',err);
// })

/*
Output :
    [
  { status: 'fulfilled', value: 'First Promise resolved successfully' },
  {
    status: 'fulfilled',
    value: 'Second Promise resolved successfully'
  },
  { status: 'rejected', reason: 'Third rejected' }
]
*/ 

// Example 3: When there are two reject 

// const promise = new Promise(function(resolve, reject) {
//     let bool = false;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('First Promise resolved successfully');
//         }, 1000);
//     } else {
//         reject('First rejected')
//     }
// });

// const promise1 = new Promise(function(resolve, reject) {
//     let bool = true;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('Second Promise resolved successfully');
//         }, 1000);
//     } else {
//         reject('Second rejected');
//     }
// })

// const promise2 = new Promise(function(resolve, reject) {
//     let bool = false;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('Third Promise resolved successfully');
//         }, 1000);
//     } else {
//         reject('Third rejected');
//     }
// })

// Promise.allSettled([promise,promise1,promise2]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

/* 
Output :
    [
  { status: 'rejected', reason: 'First rejected' },
  {
    status: 'fulfilled',
    value: 'Second Promise resolved successfully'
  },
  { status: 'rejected', reason: 'Third rejected' }
]
*/

// Example 4: 

// const promise = new Promise(function(resolve, reject) {
//     let bool = false;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('First Promise resolved successfully');
//         }, 1000);
//     } else {
//         reject('First rejected')
//     }
// });

// const promise1 = new Promise(function(resolve, reject) {
//     let bool = false;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('Second Promise resolved successfully');
//         }, 1000);
//     } else {
//         reject('Second rejected');
//     }
// })

// const promise2 = new Promise(function(resolve, reject) {
//     let bool = false;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('Third Promise resolved successfully');
//         }, 1000);
//     } else {
//         reject('Third rejected');
//     }
// })

// Promise.allSettled([promise,promise1,promise2]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

/* 
Output:
[
  { status: 'rejected', reason: 'First rejected' },
  { status: 'rejected', reason: 'Second rejected' },
  { status: 'rejected', reason: 'Third rejected' }
]
*/