/*
    LET Keyword is an improvised version of the VAR keyword. It is 
    introduced in ECMAScript 2015. These variables has block scope.
    It can't be accessible outside the particular code block.
*/

// GLOBAL access variable
let a = 10;

function f(){
    if (true){
        let b = 9; // LOCAL/FUNCTION scope variable

        console.log(b); // Access only inside block scope
    }
    //console.log(b); //cannot access outside the block scope
}
f(); // Calling the Function

//let a = 50; // Cannot re-declare LET variable
a = 50; // but can change the value of variable
console.log(a); // Access GLOBAL variable outside the function
//console.log(b);