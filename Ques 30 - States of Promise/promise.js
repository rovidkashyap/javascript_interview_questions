/*
    In JavaScript Promise Object has four states:
    1. Pending - Initial state, neither fulfilled nor rejected.
    2. Fulfilled - The operation completed successfully.
    3. Rejected - The Operation failed
    4. Settled - The promise has been either fulfilled or rejected.
*/

function asyncOperation(success = true) {
    return new Promise((resolve, reject) => {
        console.log("Promise is pending...");   // Pending state
        setTimeout(() => {
            if(success) {
                resolve("Operation successful!"); // Fullfilled state
            } else {
                reject("Operation failed!");    // Rejected state
            }
        }, 2000);
    });
}

// Example to demonstrating promise states
console.log("Starting the async operation (success case)...");

let promise1 = asyncOperation(true);

promise1
    .then(result => {
        console.log("Promise is fulfilled with result:",result); // Fulfilled state
    })
    .catch(error => {
        console.log("Promise is rejected with error:",error); // Rejected state
    })
    .finally(() => {
        console.log("Promise is settled (either fulfilled or rejected)."); // Settled state
    });

console.log("Starting the async operation (failure case)...");

let promise2 = asyncOperation(false);

promise2
    .then(result => {
        console.log("Promise is fulfilled with result:",result); // Fulfilled state
    })
    .catch(error => {
        console.log("Promise is rejected with error:",error); // Rejected state
    })
    .finally(() => {
        console.log("Promise is settled (either fulfilled or rejected)."); // Settled state
    })