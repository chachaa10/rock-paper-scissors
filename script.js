const rand = Math.floor(Math.random() * 3 + 1);
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function getCompChoice() {
    if (rand === 1) return "rock";
    else if (rand === 2) return "paper";
    else if (rand === 3) return "scissors";
}

function getHumanChoice(input) {
    if (input === "rock") return "rock";
    else if (input === "paper") return "paper";
    else if (input === "scissors") return "scissors";
}

function playRound(humanChoice, compChoice) {
    if (humanChoice === "rock" && compChoice === "paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice === "rock" && compChoice === "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice === "paper" && compChoice === "rock") {
        console.log("You Win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice === "paper" && compChoice === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice === "scissors" && compChoice === "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice === "scissors" && compChoice === "paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice === compChoice) {
        console.log("Draw! No one win");
        drawScore++;
    }
}

function playGame(rounds) {
    for (let i = 1; i <= rounds; i++) {
        const input = prompt("Choose rock paper scissors").toLocaleLowerCase();
        const humanSelection = getHumanChoice(input);
        const compSelection = getCompChoice();
        console.log(
            `\nRounds: ${i}, Human: ${humanSelection}, Computer: ${compSelection}`
        );
        playRound(humanSelection, compSelection);
        console.log(
            `Human: ${humanScore}, Computer: ${computerScore}, Draw: ${drawScore}`
        );
    }

    // Final score after 5 rounds
    console.log("\nFinal Score:");
    console.log(
        `Human: ${humanScore}, Computer: ${computerScore}, Draw: ${drawScore}`
    );
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a draw!");
    }
}

playGame(5);
