const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const ans = prompt(
    `What is your favourite programming language? \n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}`
  );

  if (ans === 0) this.answers[0]++;
  console.log(this.answers);
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
