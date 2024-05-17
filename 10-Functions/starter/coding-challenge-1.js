const poll = {
  question: 'What is your favourite programming language?',
  options: ['A: JavaScript', 'B: Python', 'C: Rust', 'D: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const ans = prompt(
    `What is your favourite programming language? \n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}`
  );

  switch (ans.toUpperCase()) {
    case 'A':
      this.answers[0]++;
      break;

    case 'B':
      this.answers[1]++;
      break;

    case 'C':
      this.answers[2]++;
      break;

    case 'D':
      this.answers[3]++;
      break;

    default:
      alert(`${ans} is not a valid answer!`);
      break;
  }

  this.displayResults(this.answers);
};

poll.displayResults = type => {
  console.log(`Results...
  Javascript: ${type[0]}
  Python: ${type[1]}
  Rust: ${type[2]}
  C++: ${type[3]}`);
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll, poll.options));
