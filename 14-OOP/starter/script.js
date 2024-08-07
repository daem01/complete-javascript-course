'use strict';

//////////////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this || use prototypes (to be learned later)
  //   this.calcAge = function () {
  //     console.log(2024 - this.birthYear);
  //   };
};

const doug = new Person('Doug', 2001);
console.log(doug);

// 1. New empty object is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1995);
console.log(matilda, jack);

const jay = 'Jay';

console.log(doug instanceof Person);
console.log(jay instanceof Person);

//////////////////////////////////////////////
// Prototypes
