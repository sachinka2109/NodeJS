// We are going to see async and await methods

function resolveDelay (delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("I got Resolved ")
        },delay)
    })
}

async function asyncFunction() {
    try {
        console.log("Before await");
        const result1 = await resolveDelay(2000);
        console.log(result1)

        console.log("Between awaits");
        const result2 = await resolveDelay(1500);
        console.log(result2);

        console.log("After await");
    }
    catch (err) {
        console.log("Error: " + err);
    }
}

asyncFunction();

/* 
OUTPUT:

Before await
I got Resolved 
Between awaits
I got Resolved 
After await
*/