let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);

const getAbsoluteDistance = (number1,number2) => Math.abs(number1 - number2);

const compareGuesses = (humang, computerg, secret) => {
    if (getAbsoluteDistance(humang, secret) < getAbsoluteDistance(computerg, secret)){
        return true;
    }
    else {
        return false;
    }
};

const updateScore = (winner) => {
    if (winner === 'human'){
        humanScore++;
    }
    else{
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;