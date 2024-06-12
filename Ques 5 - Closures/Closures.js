// In Simple words, a closure in JavaScript is a function that remembers
// the environment (the scope) in which it was created, even after that
// environment has gone away.

function outerfunction() { // Creating Outer Function
    let outerVariable = "I am outside!";    // Creating outer Variable

    function innerfunction(){ // Creating Inner Function
        console.log(outerVariable); // innerfunction has access to outerVariable
    }

    return innerfunction; // return innerFunction by outerFunction
}

const myClosure = outerfunction();
myClosure(); // Logs: 'I am outside!'

/* LET'S DO IT WITH REAL TIME EXAMPLE BY CREATING COUNTER */

function createCounter() {
    let count = 0; // This is private variable

    return function(){
        count++;
        return count;
    };
}

const counter = createCounter(); //counter is now function that returns the count

console.log(counter()); // Logs: 1
console.log(counter()); // Logs: 2
console.log(counter()); // Logs: 3

// SEE HOW IT WORKS IN REAL TIME BY STEPS:
// STEP 1 - when createCounter() is called in Line 29, it defines a local variable `count` and returns anonymous function that increaments 
//          and return `count`.
// STEP 2 - Function returned by `createCounter` is assigned to variable counter at Line 29. 
//          This Function has access to the `count` variable defines in `createCounter`, even though `createCounter` has finished executing.
// STEP 3 - Each time you call `counter`, the anonymous function increments `ount` and returns the new value.
