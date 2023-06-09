function playGame(){
    IWon = 0;
    ILost = 0;
  for(let i = 0; i < 5;i++){
  randomNumber = Math.floor(Math.random() * 3) + 1;
  let userGuess = prompt('Rock, Paper, or Scissors?');
  let playerSelection = userGuess;
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection)
  console.log(result)
  console.log(`Current score You: ${IWon}, Computer: ${ILost}`);
  }
   if(IWon > ILost){
     console.log(`You win ${IWon} to ${ILost}`);
   } else if(ILost > IWon){
     console.log(`You lost ${ILost} to ${IWon}`);
   }else{
     console.log(`It's a tie`);
   }
  }
    
  
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let IWon = 0;
  let ILost = 0;
  
  function getComputerChoice() {
      if (randomNumber === 1) {
          return "Rock";
      } if (randomNumber === 2) {
          return "Paper";
      } else {
          return "Scissors";
      }
  }
  let userGuess = prompt('Rock, Paper, or Scissors?');
  let playerSelection = userGuess;
  let computerSelection = getComputerChoice();
  
  function playRound(playerSelection, computerSelection) {
     
  
      if (playerSelection == 'Rock' && computerSelection == 'Scissors'
          || playerSelection == 'Paper' && computerSelection == 'Rock'
          || playerSelection == 'Scissors' && computerSelection == 'Paper') {
              IWon++;
              return ('You win!'); // player gets a point
              
      }
  
  
      else if (playerSelection == 'Scissors' && computerSelection == 'Rock' ||
          playerSelection == 'Rock' && computerSelection == 'Paper' ||
          playerSelection == 'Paper' && computerSelection == 'Scissors') {
          ILost++;
          return ('You lose!'); // computer gets a point
      }
  
      else {
          return ('It/s a tie');
  
      }
  }