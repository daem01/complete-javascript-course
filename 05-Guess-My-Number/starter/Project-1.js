'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);
document.querySelector('.guess').value = '';

// Refactoring with Functions
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayNumber = () => {
  document.querySelector('.number').textContent = secretNumber;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // NO INPUT
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number...';
    displayMessage('No Number');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');

    // document.querySelector('.number').textContent = secretNumber;
    displayNumber();

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem'; // Needs to be in string -- goes for all styles

    /* CODING CHALLENGE */
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }

    // Refactoring from Repeated Code
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Lower' : 'Higher';
      displayMessage(guess > secretNumber ? 'Lower' : 'Higher');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost...';
      displayMessage('You Lost...');
      document.querySelector('.score').textContent = 0;
      // document.querySelector('.number').textContent = secretNumber;
      displayNumber();
    }

    /* Do not Repeat Yourself: DRY */
    // When Guess too High
  } /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Lower';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost...';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
    }

    //When Guess is too LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Higher';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost...';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
    }
  } */
});

// RESETTING ON .AGAIN CLICK
/* CODING CHALLENGE.js */
