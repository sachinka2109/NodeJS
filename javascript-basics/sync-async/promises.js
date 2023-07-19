// We will write promises

let promise = new Promise(function(resolve, reject) {  //Promise takes 2 parameters resolve and reject
    let boolean = true;    //boolean to create  a error 
    if(boolean === true) {
        resolve("I am a resolved...");   //When we get results 
    } else {
        reject("I am not a resolved..."); // When there is a error
    }
});

promise                               //We use then and catch block to log our output and error respectively
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error)
    });

// let promise2 = new Promise(function(resolve, reject) {  //Promise takes 2 parameters resolve and reject
//     let boolean = false;    //boolean to create  a error 
//     if(boolean === true) {
//         resolve("I am a resolved...");   //When we get results 
//     } else {
//         reject("I am not a resolved..."); // When there is a error
//     }
// });

// promise2                             //We use then and catch block to log our output and error respectively
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('finally finished');
//     });


// let promise3 = (delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`delayed by : ${delay}`)
//         }, delay);
//     })
// }

// promise3(3000).then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })

