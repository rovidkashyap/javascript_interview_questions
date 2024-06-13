/*
    EXEC() vs TEST() Both methods are used with Regular Expressions,
    but they serve different purposes and return different types of
    results.
*/

// test() - this methods test for a match in a string and returns 'true'
// if find a match and 'false' otherwise

let regex = /hello/;
let str = "hello world";

console.log(regex.test(str));   // Outputs: true

str = "goodbye world"
console.log(regex.test(str));   // Outputs: false

// exec() - this method searches for a match in a string. it returns
// an array of matched results or `null` if no match is found.

let regex1 = /hello/;
let str1 = "hello world";

let result = regex1.exec(str1);
console.log(result);                // Outputs: ['hello', index: 0:...]

str1 = "goodbyw world";
result = regex1.exec(str1);
console.log(result);                // Outputs: null