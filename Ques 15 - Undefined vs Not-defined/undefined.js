/*
    A Variable that has been declared but not asssigned a value is
    'undefined'.
    A Variable that has not been declared at all is Not-Defined
*/

console.log(a);     // Undefined
var a = 5;  
console.log(a);     // 5

// Now lets take example of Not-Defined Variables

console.log(a);
var a = 5;
console.log(a);     
console.log(b);     // ReferenceError: b is not defined