const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

// Getting the value of the button
const rock = rockBtn.textContent.toLocaleLowerCase();
const paper = paperBtn.textContent.toLocaleLowerCase();
const scissor = scissorBtn.textContent.toLocaleLowerCase();

// Adding event listener
rockBtn.addEventListener("click", () => {
	playRound(rock, getCompChoice());
});
paperBtn.addEventListener("click", () => {
	playRound(paper, getCompChoice());
});
scissorBtn.addEventListener("click", () => {
	playRound(scissor, getCompChoice());
});

// Scores
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function getCompChoice() {
	const rand = Math.floor(Math.random() * 3 + 1);
	if (rand === 1) return "rock";
	else if (rand === 2) return "paper";
	else if (rand === 3) return "scissor";
}

function playRound(humanChoice, compChoice) {
	if (humanChoice === "rock" && compChoice === "paper") {
		computerScore++;
		showScore();
	} else if (humanChoice === "rock" && compChoice === "scissor") {
		humanScore++;
		showScore();
	} else if (humanChoice === "paper" && compChoice === "rock") {
		humanScore++;
		showScore();
	} else if (humanChoice === "paper" && compChoice === "scissor") {
		computerScore++;
		showScore();
	} else if (humanChoice === "scissor" && compChoice === "rock") {
		computerScore++;
		showScore();
	} else if (humanChoice === "scissor" && compChoice === "paper") {
		humanScore++;
		showScore();
	} else if (humanChoice === compChoice) {
		drawScore++;
		showScore();
	}
}

function showScore() {
	const p = document.createElement("p");
	let scores =
		(p.textContent = `Human: ${humanScore}, Computer: ${computerScore}, Draw: ${drawScore} `);
	let results = document.querySelector(".score");

	let total = humanScore + computerScore;

	if (total === 5) {
		if (humanScore > computerScore) {
			scores =
				p.textContent = `YOU WIN! Human: ${humanScore}, Computer: ${computerScore}, Draw: ${drawScore} `;
		} else if (humanScore < computerScore) {
			scores =
				p.textContent = `YOU LOSE! Human: ${humanScore}, Computer: ${computerScore}, Draw: ${drawScore} `;
		}
		resetScore();
		showScore();
	}

	const resetBtn = document.createElement("button");
	resetBtn.textContent = "Reset Score";

	resetBtn.addEventListener("click", () => {
		resetScore();
		showScore();
	});
	results.textContent = scores;
	results.append(resetBtn);
}

function resetScore() {
	humanScore = 0;
	computerScore = 0;
	drawScore = 0;
}
