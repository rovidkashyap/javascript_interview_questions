/*
    Both 'splice()' and 'slice()' are array methods in JavaScript,
    but they serve different purposes and have distinct behaviors.
*/

// splice() - modifies the original array
            // can add or remove elements from an array
            // returns an array of the removed elements.

let originalArray = [1,2,3,4,5,6];

// Using splice()
console.log("Using splice():");
let splicedArray = originalArray.splice(2, 2, 'a', 'b', 'c');
console.log("Modified origial array:",originalArray);
console.log("Returned array from splice:",splicedArray);

// This above code means that splice(2,2,'a','b','c')
// Starts at index `2`, removes `2` elements (`3` and `4`) and
// adds 'a','b','c' at the position where elements were removed.

// slice() - Do not modify the original array and returns the shallow
            // copy of a portion of an array into new array object.
            // and takes 2 arguments start index and end index.

let newArray = [1,2,3,4,5,6];

// Using slice()
console.log("\nUsing slice():");
let slicedArray = newArray.slice(2 ,4);
console.log("New Array remains unchanges:",newArray);
console.log("Returned array from slice:",slicedArray);

// This above code means that slice(2, 4)
// Starts at index `2` and ends at index `4`.