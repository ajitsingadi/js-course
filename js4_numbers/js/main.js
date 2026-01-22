const myNumber = 42;

const myFloat = 42.42;

const alphaNumeric = "42.123abc"

const myString ="Ajit"

/* console.log("My number is:", myNumber);

let myString="42";
console.log(myString);

console.log(myNumber === myString);

console.log(myString + 3)

console.log(Number(myString) + 3); //Number() function converts string to number

console.log(Number(myString) === myNumber);

console.log(Number("Ajit")); //returns not a number NaN

console.log(Number(true)); //returns 1 and 0 for false */

//Number methods

console.log(Number.isInteger(myNumber));

console.log(Number.parseFloat(myString));

console.log(Number.parseInt(myFloat));

console.log(Number.parseFloat(alphaNumeric).toFixed(2));

console.log(Number.isNaN(myString)); // Number.isNaN: It checks if the value is NaN without type conversion

console.log(isNaN(myString)); //  global isNaN: It converts the value to a number first, then checks if it’s NaN