/* let soup = "Tomato Soup";
let isCustomerBanned = false;

let soupAccess = isCustomerBanned ? "No soup for you!" : (soup ? `Here is your order of ${soup}.` : "Sorry, we're out of soup.");
console.log(soupAccess); // Output: Here is your order of Tomato Soup.   */

let studentScore = 60;

let studentGrade = studentScore >= 90 ? 'A' :
    studentScore >= 80 ? 'B' :
        studentScore >= 70 ? 'C' :
            studentScore >= 60 ? 'D' :
                studentScore >= 40 ? 'U' : 'F';
console.log(`The student's grade is: ${studentGrade}`); // Output: The student's grade is: B