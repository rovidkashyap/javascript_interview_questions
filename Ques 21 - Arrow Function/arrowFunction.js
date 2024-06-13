/*
    Arrow functionis concise way of writing JavaScript functions in 
    shorter way. Arrow functions were introduce in ES6 version. They make
    our code more structured and readable.

    Arrow functions are anonymous functions i.e. functions without a name
    but they are often assigned to any variable. They are also called
    Lambda Functions.
*/

const gfg = () => {
    console.log("Hi from Rovid Kashyap!");
}
gfg();  // Hi from Rovid Kashyap

const myGfg = ( x, y, z ) => {
    console.log( x + y + z );
}
myGfg(10, 20, 30); // 60