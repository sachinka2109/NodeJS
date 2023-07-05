/*
Asynchronous iterator ✅
Template string for non escape sequence
Regular expression reverse (look behind) assertion (this article)
Regular expression Unicode escape
Regular expression s/dotAll mode
Regular expression named capture group
Object expansion operator
Promise.prototype.finally ✅
*/

/*********** Promise.finally()  *********/

const promise = new Promise((resolve, reject) => {
    let boolean = true;
    if(boolean === true) {
        resolve('This went well!');
    } else {
        reject('This failed!');
    }

})

promise.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
.finally((done) => {
    console.log('This succeeded and will not be executed')
})


// Example 
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const randomNumber = Math.floor(Math.random());
            if(randomNumber < 5) {
                resolve('Data fetched successfully')
            } else {
                reject('Data not fetched')
            }
        },1000)
    });
}

fetchData()
.then(data => {
console.log('Success:', data);
})
.catch(error => {
console.log('Error:', error);
})
.finally(() => {
console.log('Finally Executed');
});

/*********** Asynchronous irterator  *********/

// Example:

let array = [1,2,3,4,5,6];
let newArray = [];
async function process(array) {
    for await (let i of array) {
        newArray.push(i);
    }
    console.log(newArray);
}
process(array);





