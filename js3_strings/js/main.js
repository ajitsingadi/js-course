const myVariable = "Mathematics";

/* console.log("The value of myVariable is: " + myVariable);
console.log(myVariable.length); //length property */

console.log(myVariable.charAt(0));
console.log(myVariable.indexOf("ati"));
console.log(myVariable.lastIndexOf("ath")); // last occurrence of the char or group of cahr

console.log(myVariable.slice(2, 5)); // extracts a section of a string and returns it as a new string, without modifying the original string.

console.log(myVariable.replace("Math", "Geo")); // replaces a specified value with another value in a string

console.log(myVariable.toUpperCase()); // converts a string to uppercase letters

console.log(myVariable.toLowerCase()); // converts a string to lowercase letters

console.log(myVariable.includes("math")); // determines whether a string contains the characters of a specified string, returning true or false as appropriate

console.log(myVariable.split("e")); // splits a string into an array of substrings, and returns the new array

console.log(myVariable.split(""));

console.log("John,Dave,Jane".split(","));

console.log("Every good boy does fine!".split(" "));
console.log(myVariable.padEnd)