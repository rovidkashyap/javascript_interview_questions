/*
    Callback enable you to handle the outcomes of asynchronous 
    operations in a non-blocking way. This means your program can
    keep running while the operation is ongoing

    Some Realtime examples where callback functions are useful

    1. Loading Images in a website - 
    When you load a website, images can takes a while to load, 
    especially if they are large, so with callback functions, you can
    load images asynchronously, which means that website continues to 
    load while the images are being loaded in the background
*/

function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
        callback("Operation complete");
    }, 1000);
}

//Define the callback function
function callbackFunction(result) {
    console.log("Result: " + result);
}

// call the main function with the callback function
mainFunction(callbackFunction);

/*
    -- We First define the mainFunction that takes callback as argument.
    -- mainFunction use setTimeout to simulate asynchronous operation and
    takes two arguments: a callback function and delaty time in ms.
    -- The setTimeout function calls the callback function with result
    of the operation after the specify delay time.
    -- We then define callBackFunction that logs the result of operations.
    -- Finally we call the mainFunction with callbackFunction as arguments.
*/