/*
    NaN stands for Not a Number. It's a special value in JavaScript
    that indicates something isn't a valid number. You can use it to
    check if a value is a number or not.

    There are two ways to assign a variable to NaN:  either by performing
    a calculation that results is NaN, or by directly setting the variable
    to NaN.
*/

let monthNumber = 14;

if(monthNumber < 1 || monthNumber > 12) {
    // Assigning monthNumber NaN as month number is not valid
    monthNumber = Number.NaN;
    console.log("Month number should be between 1 and 12");
} else {
    console.log(monthNumber);
}