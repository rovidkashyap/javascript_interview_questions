// SYNCHRONOUS CODE IS MEANS TO BE IN A SEQUENCE, I.E. EVERY STATEMENT
// OF THE CODE GETS EXECUTED ONE BY ONE.
// BASICALLY, STATEMENT HAS TO BE WAIT FOR THE EARLIER STATEMENT TO
// GET EXECUTED

console.log("Hi");          // First
console.log("Rovid");       // Second
console.log("How are you"); // Third

// In the above code, as you see the code will be executed at it is
// appears in the order ways, no delay in any line seems synchronous.

/*
ASYNCHRONOUS CODE ALLOWS PROGRAM TO EXECUTED IMMEDIATELY WHEREAS THE 
SYNCHRONOUS CODE WILL FINISH FIRST TASK AND THEN MOVE TO ANOTHER TASK
BUT IN ASYNCHRONOUS NO WAIT FOR TASK TO FINISH.
*/
console.log("Hi");

setTimeout(() => {
    console.log("Let us see what happens");
}, 2000);

console.log("End");

// SO first it will logged 'Hi' and then it doesn't wait for next task
// to logged and moves to another task which is 'End' and after all task 
// completed it logged 'Let us see what happens'.
