
let buttonPress = 0;
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const tiedScore = document.querySelector('.tied-score');
const playerChoice = document.querySelectorAll('.btn-player');
// const playerChoicePaper = document.querySelector('.btn-paper');
// const playerChoiceScissor = document.querySelector('.btn-scissors');

playerChoice.forEach(btn => {
    btn.addEventListener('click', event => {
        let playerSelect = event.target.outerText;
        game(playerSelect)
        }
)});

function computerPlay() {
    let choice = ["Rock" , "Paper", "Scissors"];
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
    // let playerSelect = playerChoice();
    if (playerSelection === computerSelection) {
        victor = "tied";
        return ("You choose: " + playerSelection + " and the computer choose: " + computerSelection + " The Game is Tied!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        victor = "computer";
        return ("You Lose " + computerSelection + " beats " + playerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        victor = "human";
        return ("You Win " + playerSelection + " beats " + computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        victor = "human";
        return ("You Win " + playerSelection + " beats " + computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        victor = "computer";
        return ("You Lose " + computerSelection + " beats " + playerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        victor = "computer";
        return ("You Lose " + computerSelection + " beats " + playerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        victor = "human";
        return ("You Win " + playerSelection + " beats " + computerSelection);
    }
}

let computerWin = 0;
let playerWin = 0;
let tied = 0;

function game(x) {
    let computerSelection = computerPlay();
    let player = x;
    let computerWinner;
    let tiedGame;
    let playerWinner;
    let winner;
    let totalPlays = computerWin + playerWin + tied;
    if (totalPlays < 5) {
        playRound(player, computerSelection);
            if (victor === "human") {
                console.log(victor);
                playerWin++;
                playerScore.innerText = playerWin;
            } else if (victor === "computer") {
                console.log(victor);
                computerWin++;
                computerScore.innerText = computerWin;
            } else {
                console.log(victor);
                tied++;
                tiedScore.innerText = tied;
            }
    } else {
        let winner = win(playerWin, computerWin);
        alert('The ' + winner + ' is the winner!')
        playerScore.innerText = 0;
        computerScore.innerText = 0;
        tiedScore.innerText = 0;
        computerWin = 0;
        playerWin = 0;
        tied = 0;
    }
}

function win(playerWin, computerWin) {
    if (playerWin > computerWin) {
        return "Player"
    } else {
        return "Computer"
    }
}
// game();
// console.log("The Player Won: " + playerWin + " times");
// console.log("The Computer Won: " + computerWin + " times");
// console.log("The Game was Tied: " + tied + " times");

