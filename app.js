import { compareResult } from './compare-result.js';

//initalize DOM elements//
const numberAnswer = 7;
let numberGuess = document.getElementById('number-guess');

numberAnswer.startingNumber = 0;
//set initial state//
let guessTimes = 0;
let userAnswer = userAnswer.enterNumber;

//what events do I need to listen to?
numberGuess.addEventListener('click', () => {
    userAnswer.numberGuess = userAnswer;});
let userAnswerNumber = Math.floor(userAnswer);

for (let guessTimes = 4; guessTimes < 4; guessTimes--);
document.write(guessTimes);


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
