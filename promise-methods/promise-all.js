// Promise Methods and all the conditions

// Example 1: When added setTimeOut to the resolve

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

Promise.all([promise,promise1,promise2]).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})

/* 
Output 
[
  'First Promise resolved successfully',
  'Second Promise resolved successfully',
  'Third Promise resolved successfully'
]
*/ 

// Example 2: When There is a reject in one of the promises others won't execute

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

// Promise.all([promise,promise1,promise2]).then(result => {
//     console.log(result);  // An error is thrown as promise2 is rejected
// }).catch(err => {
//     console.log('Error is :',err);
// })

/*
Output 
Error is : Third rejected
*/ 


//Example 3: If promise is empty

const promises = [];

Promise.all(promises).then((result) =>{
  console.log(result);
})
.catch(err => {
  console.log(err);
})

//output: []



// Example 3 : Mixed Result

// const promises = [
//     Promise.resolve('First'),
//     Promise.reject('Error 1'),
//     Promise.resolve('Second'),
//     Promise.reject('Error 2'),
// ]

// Promise.all(promises.map(promise => promise.catch(err => err)))
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// })



// Example 5 : For Batch operation

// const array = [1,2,3,4,5];
// const promises = array.map(userId => getUserData(userId));


// Promise.all(promises)
//   .then(userDataArray => {
//     // Process user data
//     userDataArray.forEach(userData => {
//         console.log(userData);
//     });
// })
// .catch(error => {
//     console.log('Error :',error);
// });

// function getUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const userData = fetchUserData(userId);
//             if(userData){
//                 resolve(userData);
//             } else {
//                 reject('There was an error fetching user data');
//             }
//         },1500)
//     });
// }

// function fetchUserData (userId) {
//     const userDatabase = {
//         1: { id: 1, name: 'John Doe', age: 25 },
//         2: { id: 2, name: 'Will Smith', age: 30 },
//         3: { id: 3, name: 'Davy Jones', age: 35 },
//         4: { id: 4, name: 'Walter White', age: 50 },
//         5: { id: 5,  name: 'Jesse Pinkman',age:17},
//     };

//     return userDatabase[userId];
// }