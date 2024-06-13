/*
    The 'SubStr()' and 'SubString()' methods in JavaScript are both
    used to extract parts of strings.

    1. SubStr() - This methods extracts a part of string, starting from
    a specified position and continuing for a given number of characters.

    2. SubString() - This Methods extracts chracters between two specifed
    Indices, or from start index to the end of the string.
*/

let text = "JavaScript is fun";

// Using substr()
console.log("Using substr():");
console.log(text.substr(0, 10));    // Outputs: "JavaScript"
console.log(text.substr(4, 6));     // Outputs: "Script"
console.log(text.substr(11, 3));    // Outputs: "is"
console.log(text.substr(-3));       // Outputs: "fun"
// Negative starts from the end

// Using substring()
console.log("\nUsing substring():");    
console.log(text.substring(0, 10));     // Outputs: "JavaScript"
console.log(text.substring(4, 10));     // Outputs: "Script"
console.log(text.substring(11, 14));    // Outptus: "is "
console.log(text.substring(14, 11));    // Output: " is "
console.log(text.substring(-3));        // Output: "JavaScript is fun"
// Negative index treated as 0