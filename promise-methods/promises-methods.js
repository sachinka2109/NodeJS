// Examples for testing all methods

// const promise1 = Promise.resolve('Value 1');
// const promise2 = Promise.resolve('Value 2');
// const promise3 = Promise.resolve('Value 3');

// const promises = [promise1, promise2, promise3];

// Promise.all(promises)
// .then(results => {
//     console.log(results); 
// });
// Output: ['Value 1', 'Value 2', 'Value 3']

// const promise1 = new Promise(resolve => setTimeout(resolve, 2000, 'Promise 1'));
// const promise2 = new Promise(resolve => setTimeout(resolve, 1000, 'Promise 2'));

// Promise.race([promise1, promise2])
//   .then(result => {
//     console.log(result); 
//   });
// Output: Promise 2

// const promise1 = Promise.reject('Error 1');
// // const promise2 = Promise.resolve('Value 2');
// const promise3 = Promise.reject('Error 3');

// const promises = [promise1, promise3];

// Promise.any(promises)
//   .then(result => {
//     console.log(result); // Output: Value 2
//   })
//   .catch(errors => {
//     console.log(errors); 
// });
// Output: AggregateError: All promises were rejected


// const promise1 = Promise.resolve('Value 1');
// const promise2 = Promise.reject('Error 2');
// const promise3 = Promise.resolve('Value 3');

// const promises = [promise1, promise2, promise3];

// Promise.allSettled(promises)
//   .then(results => {
//     console.log(results);
// });

// Output: [{ status: 'fulfilled', value: 'Value 1' },
//          { status: 'rejected', reason: Error: Error 2 },
//          { status: 'fulfilled', value: 'Value 3' }]



// const fetchUserData = (userId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const userData = { id: userId, name: `User ${userId}` };
//             resolve(userData);
//         }, 2000);
//     })
// }
// const userIds = [1, 2, 3, 4, 5];
// const promises = userIds.map(userId => fetchUserData(userId));

// Promise.all(promises)
//   .then(result => {
//     console.log(result);
// })
//   .catch(error => {
//     console.log(error);
// });


const fetchData = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'someUrl-2') {
          reject('Error occurred for data2');
        } else {
          resolve('Data fetched from',url);
        }
      }, Math.random() * 2000);
    });
  };
  
  const apiUrls = [
    'someUrl-1','someUrl-2','someUrl-3'
  ];
  
  const promises = apiUrls.map(url => fetchData(url));
  
  Promise.allSettled(promises)
    .then(results => {
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Request ${index + 1} fulfilled: ${result.value}`);
        } else {
          console.log(`Request ${index + 1} rejected: ${result.reason.message}`);
        }
    });
});