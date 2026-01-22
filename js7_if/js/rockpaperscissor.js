// rock paper scissor game

/* let playerOne = "rock";
let computer = "scissor";
let result;
if (playerOne === computer) {
    result = "It's a tie!";
} else if ((playerOne === "rock" && computer === "scissor") ||
           (playerOne === "scissor" && computer === "paper") ||
           (playerOne === "paper" && computer === "rock")) {
    result = "PlayerOne  wins!";
} else {
    result = "Computer wins!";
} */


let playerOne = "scissor";
let computer = "rock";

switch (playerOne) {
    case computer:
        console.log("It's a tie!");
        break
    case "rock":
        if (computer === "scissor") {
            console.log("PlayerOne wins!");
        }
        else {
            console.log("Computer wins!");
        }
        break;
    case "paper":
        if (computer === "rock") {
            console.log("playerOne wins")
        }
        else {
            console.log("Computer wins!");
        }
        break;
    default:
        if (computer === "paper") {
            console.log("PlayerOne wins!");
        }
        else {
            console.log("Computer wins!");
        }
}