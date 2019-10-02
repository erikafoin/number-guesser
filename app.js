//initalize DOM elements//
const numberAnswer = document.getElementById('number-answer');
const userAnswer = document.getElementById('user-answer');

numberAnswer.startingNumber = 0;
//set initial state//
let number = 0;

//what events do I need to listen to?
numberGuess.addEventListener('click', () => {
    volume = volume + 1;

    userAnswer.enterNumber = userAnswer;