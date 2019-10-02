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

/*const userResult = () =>
if (compareResult='0') {
    ('You got it!');
} else if (compareResult='1') {
    ('Too high. Try again.)
} else if (compareResult='-1') {
    ('Too low. Try again.)
};*/

export default compareResult;
//export default userResult;//