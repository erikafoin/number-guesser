import compareResult from './compare-result.js';

//initalize DOM elements//
//let guessNumber = document.getElementById('number-guess');//
const submitButton = document.getElementById('submit-button');
const guessTimes = document.getElementById('guess-times');
const userResult = document.getElementById('user-result');
const guess = document.getElementById ('guess');

//add two other things referred to in Index

//set initial state//
const correctNumber = 7;
let numGuesses = 4;

submitButton.addEventListener('click', () => {
    let currentGuess = parseInt(guess.value, 10); //change input to integer//
    numGuesses -= 1;

//messages for user//
   // let guessTimes = 'You have ' + numGuesses + 'guesses left';//
 //   let guessReply = '';//

//comparing guesses with compareNumbers()//

    if ((compareResult(currentGuess, correctNumber) === 1) && (numGuesses > 0)) {
        userResult.textContent = 'You guessed too high';
    }
    else if ((compareResult(currentGuess, correctNumber) === -1) && (numGuesses > 0)) {
        userResult.textContent = 'You guessed too low!';
    }
    else if ((compareResult(currentGuess, correctNumber) === 0) && (numGuesses > 0)) {
        userResult.textContent = 'You guessed correctly! You win!';
    }
    else if ((compareResult(currentGuess, correctNumber) <= 1) && (numGuesses < 0))
    {
        userResult.textContent = 'You are out of guesses. You lose!';
    }
    //disables button
    if (guessTimes === 0) {
        submitButton.disabled = true;
    }
    else if (guessTimes > 0) {
        submitButton.disabled = false;
    }
}
);


// for (let guessTimes = 4; guessTimes < 4; guessTimes--);
// document.write(guessTimes);


/*
before user clicks:
random number is generated 
random numer is stored
random number will only be regenerated upon page reload (so proceed directly to loop)
once user clicks:
(within a loop)
page takes information
page converts it into a whole number
number is stored for comparison
number is compared with guess
page returns if the guess was too high, too low, or correct.
if correct, game ends and victory message is displayed
if incorrect, failure message is displayed with number of guesses is tallied
Return to step 1 until one of two things happens - 
either user runs out of guesses and failure message is displayed
or victory message is displayed*/
