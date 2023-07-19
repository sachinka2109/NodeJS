// Program to find even numbers
// let number =3;

// setTimeout(() => {
//     let promise = new Promise((resolve, reject) => {
//         if(number % 2 === 0) {
//             resolve('It is even Number');
//         } else {
//             reject('It is not even Number');
//         }
//     });

//     promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally('finish');
// },2000)


// Promise Methods

let result = '2';
let newPromise = new Promise(function(resolve,reject) {
    if(result === '2'){
        setTimeout(() => {
            resolve('Number is 2');
        },2000)
    } else {
        reject('Number is not 2');
    }
})

newPromise
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})

const newPromise2 = Promise.resolve('It is resolved');
// const newPromise2 = Promise.reject('It is not resolved');

// result = true;
// const newPromise3 = new Promise(function (resolve, reject) {
//     if(result === true) {
//         setTimeout(() => {
//             resolve('newPromise3 resolved');
//         },2000)
//     } else {
//         reject('newPromise3 rejected');
//     }
// });

let promises = [newPromise,newPromise2];

// Promise.all(promises).then(result => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })

// Promise.any(promises).then(result => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })

// Promise.race(promises).then(result => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })

// Promise.allSettled(promises).then(result => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })