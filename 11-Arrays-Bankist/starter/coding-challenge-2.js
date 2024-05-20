'use strict';

const data = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dataSet) {
  let humanAge;
  const age = dataSet
    .map(function (dogAge) {
      dogAge <= 2 ? (humanAge = 2 * dogAge) : (humanAge = 16 + dogAge * 4);
      return humanAge;
    })
    .filter(age => age >= 18);
  // .reduce((acc, age) => acc + age, 0);

  const ageSum = age.reduce((acc, age) => acc + age, 0);

  return (ageSum / age.length).toFixed(1);
};

console.log(`----- Data Set 1 -----`);
console.log(`Average Human Age: ${calcAverageHumanAge(data)}`);
console.log(`----- Data Set 2 -----`);
console.log(`Average Human Age: ${calcAverageHumanAge(data2)}`);
