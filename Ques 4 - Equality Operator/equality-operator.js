// Both are used to compare two values in JavaScript, 
// but both do different jobs.

//(==) - Double Equality
//(===) - Triple Equality

// Double Equality (==):
let string = "10"; // Assign string value
let number = 10;   // Assign number value

console.log(string == number); //Output will be TRUE
// Double Equality Operator will check only value not the DataType
// Both having same value that's why it shows true as output.

// Triple Equality (===):
let string2 = "20"; // Assign string value
let number2 = 20;   // Assign number value

console.log(string2 === number2); // Output will be FALSE
// Triple Equality Operator will check the DataType not value so it
// will show FALSE because both have different DataTypes.

// (==) - Double Equality -> Checks only values not DataTypes.
// (===) - Triple Equality -> Checks DataTypes not Values.