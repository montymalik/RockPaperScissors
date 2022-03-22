

function computerPlay() {
    let choice = ["rock" , "paper", "scissors"];
    let randomSelect = Math.floor(Math.random() * 3);
    if (randomSelect === 0) {
        return choice[randomSelect];
    } else if (randomSelect === 1) {
        return choice[randomSelect];
    } else {
        return choice[randomSelect];
    }
}

var victor = "set";

function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    if (playerSelect === computerSelection) {
        victor = "tied";
        return ("You choose: " + playerSelect + " and the computer choose: " + computerSelection + " The Game is Tied!");
    } else if (playerSelect === "rock" && computerSelection === "paper") {
        victor = "computer";
        return ("You Lose " + computerSelection + " beats " + playerSelect);
    } else if (playerSelect === "rock" && computerSelection === "scissors") {
        victor = "human";
        return ("You Win " + playerSelect + " beats " + computerSelection);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        victor = "human";
        return ("You Win " + playerSelect + " beats " + computerSelection);
    } else if (playerSelect === "paper" && computerSelection === "scissors") {
        victor = "computer";
        return ("You Lose " + computerSelection + " beats " + playerSelect);
    } else if (playerSelect === "scissors" && computerSelection === "rock") {
        victor = "computer";
        return ("You Lose " + computerSelection + " beats " + playerSelect);
    } else if (playerSelect === "scissors" && computerSelection === "paper") {
        victor = "human";
        return ("You Win " + playerSelect + " beats " + computerSelection);
    }
}

let computerWin = 0;
let playerWin = 0;
let tied = 0;

function game() {
    for (let i = 0; i<5; i++) {
        let playerChoice = prompt("Rock, Paper or Scissor:");
        let computerSelection = computerPlay();
        console.log(playRound(playerChoice, computerSelection));
        if (victor === "human") {
            playerWin++;
        } else if (victor === "computer") {
            computerWin++;
        } else {
            tied++;
        }
    }
}

game();
console.log("The Player Won: " + playerWin + " times");
console.log("The Computer Won: " + computerWin + " times");
console.log("The Game was Tied: " + tied + " times");

