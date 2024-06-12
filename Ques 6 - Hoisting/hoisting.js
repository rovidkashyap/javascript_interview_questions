/* JavaScript Hoisting */ 

let a;          // Declaration
a = 100;        // Assignment
console.log(a); // Usage

// However JavaScript let us to allow declaration and assignment both 
// simultaneously

let b = 100;    // Declaration and Assigning

// But in background JavaScript first declare the variable and than
// Initialize the value.

// HOISTING :
function codeHoist() {
    z = 10;     // Hoisting allow variable to be declare by VAR keyword, that's why access outside the function
    let x = 50;
}
codeHoist();

console.log(z);     // 10
console.log(x);     // ReferenceError: x is not defined
