'use strict';

//////////////////////////////////////////////
// Constructor Functions and the new Operator
/*
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
console.log(doug.__proto__.__proto__); // Object.prototype
console.log(doug.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Avoid in practice but fun experiment
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.log(h1.__proto__);
// console.log(h1.__proto__.__proto__);
// console.log(h1.__proto__.__proto__.__proto__);
// console.log(h1.__proto__.__proto__.__proto__.__proto__);
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__);
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);

console.dir(x => x + 1);

////////////////////////////////////////////*/
// ES6 Classes
// classes are still a type of function
// 1. Classes are NOT hoisted (hoisted = can be used before decalred in the code a.k.a. classes can not be used before they are declared)
// 2. Classes are first-class citizens (can be passed into functions, and can return from functions)
// 3. The body of a Class is always executed in strict mode whether the file is or not

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added ot .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}!`);
  }

  // Getter/Setter Lecture
  get age() {
    return 2024 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Methods Lecture
  static hey() {
    console.log('Hey There Class 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
// Getter/Setter Lecture

console.log(jessica.__proto__);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}!`);
// };
jessica.greet();

// const walter = new PersonCl('Walter', 1965);
const walterWhite = new PersonCl('Walter White', 1965);

//////////////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'doug',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

console.log(jessica.age);

//////////////////////////////////////////////
// Static Methods
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const doug = new Person('Doug', 2001);
console.log(doug);

Person.hey = function () {
  console.log('Hey There 👋');
  console.log(this);
};

Person.hey();
// doug.hey(); // can't inherit
PersonCl.hey();

//////////////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('sarah', 1979);
sarah.calcAge(); // only works because we called init() right before
