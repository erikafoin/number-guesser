const compareResult = (guess, correctNumber) => { 
    if (guess === correctNumber) {
        return (0);
    } else if (guess > correctNumber){
        return (1);
    } else if 
    (guess < correctNumber) {
        return (-1);
    }
};

const userResult = (0, 1, 2) =>
if (compareResult='0') {
    alert('You got it!');
} else if (compareResult='1') {
    alert('Too high. Try again.)
} else if (compareResult='-1') {
    alert('Too low. Try again.)
};

export default userResult;