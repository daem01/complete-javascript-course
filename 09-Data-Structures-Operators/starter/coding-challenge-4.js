const arr = [
  'underscore_case  ',
  ' first_name  ',
  'Some_Variable   ',
  '   calculate_AGE   ',
  'delayed_departure',
];

/*
// My Answer -- Just for functionality; left out DOM elements
const toCamelCase = snake => {
  const snakeStandardized = snake.toLowerCase().trim().split('_');
  const camelUpper = snakeStandardized[1].replace(
    snakeStandardized[1][0],
    snakeStandardized[1][0].toUpperCase()
  );

  return snakeStandardized[0] + camelUpper;
};

let i = 1;
for (const word of arr) {
  console.log(`${toCamelCase(word)} ${'✅'.repeat(i)}`);
  i++;
}
*/

// Data
/*
underscore_case 
 first_name 
Some_Variable  
  calculate_AGE 
delayed_departure 
*/

// Schmedtmann's Answer
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  //   console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
