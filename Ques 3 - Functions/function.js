// Defining the functions in JavaScript

// EXAMPLE 1:
function myFunction(g1, g2){
    return g1 + g2;
}
const value = myFunction(10, 12); //Calling the function
console.log(value);

// FUNCTION EXPRESSION:
const square = function(number) {
    return number * number;
};
const x = square(4); // x gets the value 16
console.log(x);

// FUNCTIONS AS VARIABLE VALUES:
function toCelsius(farenhiet) {
    return (farenhiet - 32) * 5/9;
}

// Using function to convert temperature
let temperatureInFarenheit = 77;
let temperatureInCelsius = toCelsius(temperatureInFarenheit);
let text = "The temperature is " + temperatureInCelsius + " Celsuis";
console.log(text);

// ARROW FUNCTION:
const a  = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a2 = a.map(function (s){
    return s.length;
});

console.log("Normal way ", a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);
console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]

// CALLING FUNCTOINS:
function welcomeMsg(name){
    return ("Hello " + name + " welcome to Techunsolved!");
}

// creating a variable
let val = "Rovid";

// calling the function
console.log(welcomeMsg(val));