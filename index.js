let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

// Add event listener to the "Play Game" button
const startButton = document.getElementById('start');
startButton.addEventListener('click', playGame);

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function() {
  if (roundsPlayed < 5) {
    const playerSelection = 'Rock';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    console.log(`Current score - Player: ${playerScore}, Computer: ${computerScore}`);
    checkGameEnd();
  }
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function() {
  if (roundsPlayed < 5) {
    const playerSelection = 'Paper';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    console.log(`Current score - Player: ${playerScore}, Computer: ${computerScore}`);
    checkGameEnd();
  }
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function() {
  if (roundsPlayed < 5) {
    const playerSelection = 'Scissors';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    console.log(`Current score - Player: ${playerScore}, Computer: ${computerScore}`);
    checkGameEnd();
  }
});

function playRound(playerSelection, computerSelection) {
  roundsPlayed++;

  if (playerSelection == 'Rock' && computerSelection == 'Scissors'
    || playerSelection == 'Paper' && computerSelection == 'Rock'
    || playerSelection == 'Scissors' && computerSelection == 'Paper') {
    playerScore++;
    return 'You win!'; // player gets a point
  } else if (playerSelection == 'Scissors' && computerSelection == 'Rock'
    || playerSelection == 'Rock' && computerSelection == 'Paper'
    || playerSelection == 'Paper' && computerSelection == 'Scissors') {
    computerScore++;
    return 'You lose!'; // computer gets a point
  } else {
    return 'It\'s a tie';
  }
}

function playGame() {
  roundsPlayed = 0;
  playerScore = 0;
  computerScore = 0;
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return 'Rock';
  } else if (randomNumber === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function checkGameEnd() {
  if (roundsPlayed === 5) {
    console.log(`Final score - Player: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (playerScore < computerScore) {
      console.log('You lose the game!');
    } else {
      console.log('It\'s a tie!');
    }
  }
}
const p = document.createElement('p');
p.textContent(`${playerScore}`);

user.appendChild(p);
