import compareResult from './compare-result.js';

const submitButton = document.getElementById('submit-button');
const guessTimes = document.getElementById('guess-times');
const userResult = document.getElementById('user-result');
const guess = document.getElementById ('guess');

let correctNumber = 7;
let numGuesses = 4;

submitButton.addEventListener('click', () => {
    let currentGuess = parseInt(guess.value, 10 + 1); 
    numGuesses -= 1;

    if ((compareResult(currentGuess, correctNumber) === 1) && (numGuesses > 0)) {
        userResult.textContent = 'You guessed too high';
    }
    else if ((compareResult(currentGuess, correctNumber) === -1) && (numGuesses > 0)) {
        userResult.textContent = 'You guessed too low!';
    }
    else if ((compareResult(currentGuess, correctNumber) === 0) && (numGuesses > 0)) {
        userResult.textContent = 'You guessed correctly! You win!';
    }
    else if ((compareResult(currentGuess, correctNumber) <= 1) && (numGuesses < 0)) {
        userResult.textContent = 'You are out of guesses. You lose!';
    }

    

    if (numGuesses === 0) {
        submitButton.disabled = true;
        guessTimes.textContent = 'You are out of guesses!';
    }
    else if (compareResult(currentGuess, correctNumber) === 0) {
        submitButton.disabled = true;
        guessTimes.textContent = 'Congratulations!';
    }
    else if (numGuesses > 0) {
        submitButton.disabled = false;
        guessTimes.textContent = 'You have ' + numGuesses + ' guesses left';
    }

}
);
