/* NUMBER: */

let num = 2;                        // Integer
let num2 = 1.3;                     // Floating Point Number
let num3 = Infinity;                // Infinity
let num4 = 'something here too';    // NaN

/* STRING: */
let str = "Hello There";                // Double Quoted String
let str2 = 'Single quotes works fine';  // Single Quoted String
let phrase = `can embed ${str}`;        // Embede another String

/* BOOLEAN: */
let idCoding = true;        // YES
let isOld = false;          // NO

/* NULL: */
let age = null; // null datatype basically defines a special value the 
                // represent 'nothing', 'empty' or 'value unknown'.

let x;
console.log(x); // Undefined
                // Undefined Just like null. The meaning of undefined
                // is 'value is not assigned'.

/* SYMBOL: */
let symbol1 = Symbol("Geeks");
let symbol2 = Symbol("Geeks");

// Each time Symbol() method is used to create new global Symbol
console.log(symbol1 == symbol2); // False

/* BIGINT: */
let bigBin = BigInt("0b1010101001010101001111111111111111");
console.log(bigBin);

