/* //conditional if statements

let customerIsBanned = false;
let soup = "tomato soup";
let reply;
let crackers= true;

if (customerIsBanned) {
    reply = "No soup for you!";
}
else if (soup && crackers) {
    reply = `Here is your order of  ${soup} and crackers.`;
}
else if (soup) {
    reply = `Here is your order of  ${soup}.`;
}
else {
    reply = "Sorry, we're out of soup.";
}

console.log(reply); // Output: Yes, we have tomato soup. */

let isStudent = true;
let studentScore = 49;
let grade;

if (studentScore >= 90) {
    grade = 'A';
}
else if (studentScore >= 80) {
    grade = 'B';
}
else if (studentScore >= 70) {
    grade = 'C';
}
else if (studentScore >= 60) {
    grade = 'D';
} else {
    if(isStudent){
        grade = 'U'
    }
    else {
        grade = 'F';
    }
}

console.log(`The student's grade is: ${grade}`); // Output: The student's grade is: B

