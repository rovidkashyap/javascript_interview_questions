/*
    JavaScript have four types of Scopes
    1. Block Scope
    2. Function Scope
    3. Local Scope
    4. Global Scope
*/

// 1. BLOCK SCOPE :
function foo() {
    if(true) {
        var x = '1';        // Exists in function scope
        const y = '2';      // Exists in block scope
        let z = '3';        // Exists in block scope
    }

    console.log(x);         // 1
    //console.log(y);         // ReferenceError: y is not defined
    //console.log(z);
}
foo();

// 2. FUNCTION SCOPE :

function myFunction1() {
    var firstName = "Rovid";  // Function Scope
}
console.log(myFunction1());

function myFunction2() {
    let firstName = "Rovid";    // Function Scope
}
console.log(myFunction2());

function myFunction3() {
    const firstName = "Rovid";  // Function Scope
}
console.log(myFunction3());

// Variable defined inside a function are not accessible from outside the 
// function and variables declares with var, let and const are quite similar
// when declared inside a function.

// 3. LOCAL SCOPE :

function myFunction4() {
    let firstName = "Rovid";
    console.log(firstName);     // Rovid: This part can use local scope variable
}
console.log(myFunction4());     //  undefined: Local Scope variable cannot
                                //  access from outside of function

// 4. GLOBAL SCOPE :

var a = '1';            // Global Scope variable
const b = '2';          // Global scope variable
let c = '3';            // Gloabl scope variable

console.log(a);         // 1
console.log(b);         // 2
console.log(c);         // 3

function getNo() {
    console.log(a);     // a is accessible here
    console.log(b);     // b is accessible here
    console.log(c);     // c is accessible here
}

// Variables declared globally (outside of any function) having Global 
// Scope and Global variables can be accessed from anywhere in a program.