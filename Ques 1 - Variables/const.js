/*
    CONST keyword has all the properties that are same as the LET keyword,
    except the user cannot update the value which assign at time of declaration.
    These variables also have block scope.
*/

// CONST variable declaration
const a = 10;

function f(){
    //a = 9; // Cannot change the value of a CONST
    console.log(a);
}
f();

console.log(a); // Access the value of CONST 'a'

// Declaring CONST javascript object
const x = {
    prop1: 100,
    prop2: 90
}

x.prop1 = 50; // This is allowed in javascript

console.log(x.prop1); // Accessing CONST javascript object value