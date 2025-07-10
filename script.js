const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector(".results");
const playerP = document.querySelector("#playerScore");
const computerP = document.querySelector("#computerScore");

let playerScore = 0;
let computerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choice = getRandomInt(3);
  console.log(`The computer number is ${choice}.`);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else if (choice == 2) {
    return "scissors";
  } else {
    console.log("Number is not 1, 2 or 3");
  }
}

function compareChoices(player, computer) {
  if (player == computer) {
    resultDiv.innerText = "It's a tie!";
  } else if (player == "rock" && computer != "paper") {
    resultDiv.innerText = "You lost";
    return false;
  } else if (player == "paper" && computer != "scissors") {
    resultDiv.innerText = "You lost";
    return false;
  } else if (player == "scissors" && computer != "rock") {
    resultDiv.innerText = "You lost";
    return false;
  } else {
    resultDiv.innerText = "You won!";
    return true;
  }
}

function updateScore(result) {
  if (result === false) {
    computerScore++;
    computerP.innerText = computerScore;
  } else if (result === true) {
    playerScore++;
    playerP.innerText = playerScore;
  }
}

function startRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const playerWon = compareChoices(playerChoice, computerChoice);
  updateScore(playerWon);
  gameOver(5);
}

function gameOver(roundNum) {
  if (playerScore == roundNum || computerScore == roundNum) {
    resultDiv.innerText = "Game over!!";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    startRound(button.id);
  });
});
