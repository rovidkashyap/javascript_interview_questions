/*
    JavaScript has several types of errors that you might encounter 
    while writing and running your code. These error can be categorized:

    1. Syntax Errors
    2. Reference Errors
    3. Type Errors
    4. Range Errors
    5. URI Errors
    6. Eval Errors
    7. Aggregate Errors (introduce in ES2021)
*/

// 1. Syntax Error
// This occurs when there is mistake in syntax of the code.
try {
    eval('let x = ;') // SyntaxError: Unexpected token
} catch(e) {
    console.error("Syntax Error:", e.message);
}

// 2. Reference Error
// This occurs when a non-existent variable is referenced.
try {
    console.log(nonExistentVariable); // ReferenceError: nonExistentVariable is not defined
} catch (e) {
    console.error("Reference Error:", e.message);
}

// 3. Type Error
// This occurs when a value is not of the expected type.
try {
    null.f(); // TypeError: Cannot read property 'f' of null
} catch (e) {
    console.error("Type Error:",e.message);
}

// 4. Range Error
// This occurs when a value is not within the expected range.
try {
    let arr = new Array(-1); // RangeError: Invalid array length
} catch (e) {
    console.error("Range Error:",e.message);
}

// 5. URI Error
// This occurs when there is an error in encoding or decoding a URI
try {
    decodeURIComponent('%');    // URIError: URI malformed
} catch (e) {
    console.error("URI Error:",e.message);
}

// 6. Eval Error
// This occurs when there is an error in the eval() function.
// Note: This is not commonly used in modern JavaScript.
try {
    eval("throw new EvalError('Eval Error')"); // EvalError: Eval Error
} catch (e) {
    console.error("Eval Error:",e.message);
}

// 7. Aggregate Error (Introduce in ES2021)
// This occurs when multiple errors are thrown together, typically
// with Promise.any().
try {
    throw new AggregateError([
        new Error("Error 1"),
        new Error("Error 2"),
    ], "Multiple errors occurred");
} catch (e) {
    console.error("Aggregate Error: ",e.message);
    for (const err of e.errors) {
        console.error(err.message);
    }
}