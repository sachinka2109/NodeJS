// Promise.race() with conditions

// Example 2 : with setTimeout

const promise = new Promise(function(resolve, reject) {
    let bool = true;
    if(bool === true){
        setTimeout(() => {
            resolve('First Promise resolved successfully');
        }, 1500);
    } else {
        reject('First rejected')
    }
});

const promise1 = new Promise(function(resolve, reject) {
    let bool = true;
    if(bool === true){
        setTimeout(() => {
            resolve('Second Promise resolved successfully');
        }, 2000);
    } else {
        reject('Second rejected');
    }
})

const promise2 = new Promise(function(resolve, reject) {
    let bool = true;
    if(bool === true){
        setTimeout(() => {
            resolve('Third Promise resolved successfully');
        }, 1000);
    } else {
        reject('Third rejected');
    }
})

Promise.race([promise,promise1,promise2]).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})

/* 
Output :
    Third Promise resolved successfully
*/

// Example 3: When there is a reject.

// const promise = new Promise(function(resolve, reject) {
//     let bool = true;
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

// Promise.race([promise,promise1,promise2]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

/* 
Output :
    Third rejected
*/

// Example 5: When there are two reject 

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

// Promise.race([promise,promise1,promise2]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

/* 
Output :
First rejected
*/

// Example 6: 

// const promise = new Promise(function(resolve, reject) {
//     let bool = false;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('First Promise resolved successfully');
//         }, 1000);
//     } else {
//          reject('FIrst rejected');
//     }
// });

// const promise1 = new Promise(function(resolve, reject) {
//     let bool = false;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('Second Promise resolved successfully');
//         }, 1000);
//     } else {
//            reject('Second rejected');
//     }
// })

// const promise2 = new Promise(function(resolve, reject) {
//     let bool = false;
//     if(bool === true){
//         setTimeout(() => {
//             resolve('Third Promise resolved successfully');
//         },1000);
//     } else {
//          reject('Third rejected');
//     }
// })

// Promise.race([promise,promise1,promise2]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

// Output : First rejected