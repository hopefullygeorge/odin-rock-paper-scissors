function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choice = getRandomInt(3);
  console.log(`The random number is ${choice}.`);
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

function getHumanChoice() {
  let choice = prompt("Please choose Rock, Paper or Scissors.").toLowerCase();
  if (choice == "rock") {
    return "rock";
  } else if (choice == "paper") {
    return "paper";
  } else if (choice == "scissors") {
    return "scissors";
  } else {
    console.log(`Can't read the prompt. Check spelling of ${choice}`);
  }
}

function playRound(humanChoice, computerChoice) {
  console.log(`Human = ${humanChoice} computer = ${computerChoice}.`);
  if (computerChoice < humanChoice) {
    console.log(`You lose. ${humanChoice} beats ${computerChoice}`);
    return true;
  } else if (computerChoice > humanChoice) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    return false;
  } else if (computerChoice == humanChoice) {
    console.log("It's a tie!");
  } else {
    console.log("Logic has failed!");
  }
}

function playGame(numberOfRounds) {
  let roundCount = 1;
  let humanScore = 0;
  let computerScore = 0;

  while (roundCount <= numberOfRounds) {
    console.log(`Round ${roundCount}!`);
    console.log(`
        You = ${humanScore}
        Computer = ${computerScore}`);
    if (playRound(getHumanChoice(), getComputerChoice())) {
      computerScore++;
    } else {
      humanScore++;
    }

    roundCount++;
  }
  return humanScore, computerScore;
}

function finalScore(humanScore, computerScore) {
  if (humanScore > computerScore) {
    alert(`You Win! You: ${humanScore} to Computer: ${computerScore}!`);
  } else if (humanScore < computerScore) {
    alert(`You Lose! You: ${humanScore} to Computer: ${computerScore}!`);
  } else {
    alert(`You Tied. You: ${humanScore} to Computer: ${computerScore}!`);
  }
}

finalScore(playGame(5));
