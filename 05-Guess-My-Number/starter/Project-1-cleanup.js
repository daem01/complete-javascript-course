'use strict';

/* Variables */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);
document.querySelector('.guess').value = '';

/* Functions */
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayNumber = () => {
  document.querySelector('.number').textContent = secretNumber;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // NO INPUT
  if (!guess) {
    displayMessage('No Number');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    displayNumber();

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem'; // Needs to be in string -- goes for all styles

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }

    // When Player Doesn't Win Yet
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Lower' : 'Higher');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost...');
      document.querySelector('.score').textContent = 0;
      displayNumber();
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
