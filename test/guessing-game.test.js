// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareResult from '../compare-result.js';

const test = QUnit.test;

test('should return 0 if the guess and the number are the same', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const numberAnswer = 5;
    let userGuess = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareResult(userGuess, numberAnswer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});

test('should return 1 if the guess is larger than the number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const numberAnswer = 5;
    let userGuess = 6;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareResult(userGuess, numberAnswer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});

test('should return -1 if the guess is larger than the number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const numberAnswer = 5;
    let userGuess = 4;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareResult(userGuess, numberAnswer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
});