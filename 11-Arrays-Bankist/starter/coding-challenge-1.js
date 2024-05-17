'use strict';

// Dataset 1
const dataJulia = [3, 5, 2, 12, 7];
const dataKate = [4, 1, 15, 8, 3];

// Dataset 2
const dataJulia2 = [9, 16, 6, 8, 3];
const dataKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice(1, -1);
  const dogsAll = dogsJuliaCopy.concat(dogsKate);

  dogsAll.forEach(function (dogAge, i) {
    console.log(
      `Dog number ${i + 1} is ${
        dogAge <= 3
          ? 'still a puppy 🐶'
          : `an adult, and is ${dogAge} years old`
      }`
    );
  });
};

console.log(`----- Data Set 1 -----`);
checkDogs(dataJulia, dataKate);
console.log(`----- Data Set 2 -----`);
checkDogs(dataJulia2, dataKate2);
