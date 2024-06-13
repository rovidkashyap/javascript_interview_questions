/*
    The Promise Object supports two properties: state and result
    -- When Promise Object is "Fulfilled", the result is a value.
    -- When Promise Object is "Rejected", the result is an error.
    -- While a Promise Object is "Pending" (working), the result is
    undefined.
*/

// The Promise Constructor takes only one argument which is a callback
// function and that callback function takes two arguments that is
// 'resolve' and 'reject'

/* let promise = new Promise(function(resolve, reject){
    // do something
}) */

// Perform operations inside callback function and if everything went
// well then call 'resolve', if not than call 'reject'

// Four Stages of Promise are - 
// 'FULFILLED', 'REJECTED', 'PENDING', 'SETTLED'

let promise = new Promise(function(resolve, reject) {
    const x = 'rovidkashyap';
    const y = 'rovidkashyap'
    if(x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function() {
        console.log("Success, You are a Coder");
    }).
    catch(function() {
        console.log("Some error has occurred");
    })

// Promise can be consumed by registering functions using '.then' and 
// '.catch' methods.

