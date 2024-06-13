/*
    Both 'IndexOf()' and 'LastIndexOf()' are methods used to find the
    position of a specified value within a string or array. The key 
    difference is that 'IndexOf()' return first occurence, while 
    'LastIndexOf()' returns the last occurence.
*/

let text = "Hello world, welcome to the world of Javascript";

// Using IndexOf() to find the first occurrence of "world"
let firstIndex = text.indexOf("world");
console.log("First Occurrence of 'world' : ", firstIndex); // Output: 6

// Using LastIndexOf() to find the last occurrence of "world"
let lastIndex = text.lastIndexOf("world");
console.log("Last Occurrence of 'world' : ", lastIndex); // Output: 28