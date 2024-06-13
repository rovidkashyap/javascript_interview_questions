/*
    All Errors in JavaScript can be easily handled by four statements
    1. try Statement - lets you test a block of code to check for errors
    2. catch Statement - lets you handle the error if any present
    3. throw Statement - lets you make your own errors.
    4. finally statement - let you execute after try and catch
*/

function myFunction() {
    let a = 10;
    try {
        console.log("Value of variable a is : " + a);
    } catch (e) {
        console.log("Error: " + e.description);
    }
}
myFunction(); // Value of variable a is 10

// The above code does not display any error. Let see another example 
// with catch error block

try {
    dadalert("Welcome Fellow Coders");
} catch (err) {
    console.log(err); // ReferenceError: dadalert is not defined
}

// Here you will see the error is handle in catch block, now let see
// the error by throw statement

try {
    throw new Error("Yeah..... Sorry");     // Error: Yeah.... Sorry
} catch(e) {
    console.log(e);
}

// In the above example it throw an error, let see finally block code

try {
    console.log('try');
} catch (e) {
    console.log('catch');
} finally {
    console.log('finally');
}

// In the above example you will see that first it executes try block
// and display 'try' and it does not find any error in try block so
// catch block does not executed and after try block it move directly
// to the finally block and executes 'finally' as output in console.
