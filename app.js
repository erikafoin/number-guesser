//initalize DOM elements//
const numberAnswer = document.getElementById('number-answer');
let numberGuess = document.getElementById('number-guess');

numberAnswer.startingNumber = 0;
//set initial state//
let guessTimes = 0;
let userAnswer = userAnswer.enterNumber;

//what events do I need to listen to?
numberGuess.addEventListener('click', () => {
    userAnswer.enterNumber = userAnswer;});

for (let guessTimes = 0; guessTimes < 5; guessTimes++);
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
page returns one of two answers
if yes, game ends and victory message is displayed
if no, failure message is displayed with number of guesses is tallied
Return to step 1 until one of two things happens - 
either user runs out of guesses and failure message is displayed
or victory message is displayed*/
