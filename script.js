console.log('hi');

// let userInput = userInput.toLowerCase();

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log(`Error: ${userInput} is not a valid input.`);
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0 :
      return 'rock';
      break;
    case 1 :
      return 'paper';
      break;
    case 2 :
      return 'scissors';
      break;
    default :
      return 'Error: not able to generate response';
      break;
  }
}

//using console.logs instead of returns
// function determineWinner(userChoice, computerChoice) {

//  if (userChoice === computerChoice) {
//   console.log(`This game is a tie. User chose ${userChoice} and the computer chose ${computerChoice}`);
//  } 

//  if (userChoice === 'rock') {
//   if (computerChoice === 'paper') {
//     console.log(`The computer has won! User chose ${userChoice} and the computer chose ${computerChoice}`);
//   } else {
//     console.log(`The user has won! User chose ${userChoice} and the computer chose ${computerChoice}`);
//   } 
//  }

//  if (userChoice === 'paper') {
//   if (computerChoice === 'scissors') {
//     console.log(`The computer has won! User chose ${userChoice} and the computer chose ${computerChoice}`);
//   } else {
//     console.log(`The user has won! User chose ${userChoice} and the computer chose ${computerChoice}`);
//   } 
//  }

//   if (userChoice === 'scissors') {
//     if (computerChoice === 'rock') {
//       console.log(`The computer has won! User chose ${userChoice} and the computer chose ${computerChoice}`);
//     } else {
//       console.log(`The user has won! User chose ${userChoice} and the computer chose ${computerChoice}`);
//     } 
//   }
// }

//Using returns to eliminate an 'undefined' message in the console.
function determineWinner(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
    return `This game is a tie. User chose ${userChoice} and the computer chose ${computerChoice}`;
  }

  if (userChoice === 'bomb') {
    return `The user has won! User chose ${userChoice} and the computer chose ${computerChoice}, but bomb wins every time!`;
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return `The computer has won! User chose ${userChoice} and the computer chose ${computerChoice}`;
    } else {
      return `The user has won! User chose ${userChoice} and the computer chose ${computerChoice}`;
    } 
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return `The computer has won! User chose ${userChoice} and the computer chose ${computerChoice}`;
    } else {
      return `The user has won! User chose ${userChoice} and the computer chose ${computerChoice}`;
    } 
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return `The computer has won! User chose ${userChoice} and the computer chose ${computerChoice}`;
    } else {
      return `The user has won! User chose ${userChoice} and the computer chose ${computerChoice}`;
    } 
  }
 
}

function playGame() {
  let userChoice = getUserChoice('bomb');
  console.log(`The user choice is ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`The computer choice is ${computerChoice}`);

  return winner = determineWinner(userChoice, computerChoice);
}

playGame();
console.log(winner);