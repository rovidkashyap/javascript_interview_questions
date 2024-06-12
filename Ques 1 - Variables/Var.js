/*
    VAR keyword is oldest keyword to declare a variable in JavaScript
    It has Global scoped or function scoped which means variables defined
    outside the function can be accessed globally, and variables defined
    inside the functions can be accessed within the function.
*/

// GLOBAL Scope Variable
var a = 10; // Define this variable out of the function

function f(){
    // LOCAL/FUNCTION Scope Variable
    var b = 20; // Define this in inside function
    console.log(a, b)
}
f();

a = 15; // Re-Declaring the value of variable

console.log(a); // Global Scope can access outside function
//console.log(b); // Local Scope cannot access outside function