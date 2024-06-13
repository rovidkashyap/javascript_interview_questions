/*
    The InstanceOf operator in JavaScript is used to check the type of
    an object at run time. It returns a boolean value if true then it
    indicates that the object is an instance of a particular class and
    if false then it is not.
*/

var myString = new String();
var myDate = new Date();

console.log(myString instanceof Object);        // true
console.log(myString instanceof Date);          // false
console.log(myString instanceof String);        // true
console.log(myDate instanceof Date);            // true
console.log(myDate instanceof Object);          // true
console.log(myDate instanceof String);          // false