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
console.log(Person.prototype);

// Prototypal inheritance
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

doug.calcAge();
matilda.calcAge();

console.log(doug.__proto__);
console.log(doug.__proto__ === Person.prototype); // not the prototype of Person but the prototype that all instances that are created

console.log(Person.prototype.isPrototypeOf(doug));

Person.prototype.species = 'Homo Sapiens';
console.log(doug.species, matilda.species);

console.log(doug.hasOwnProperty('firstName'));
console.log(doug.hasOwnProperty('species')); // returns false because doug only has access to species through prototype not on doug object itself

//////////////////////////////////////////////
// Prototypal Inheritance and the Prototype Chain
