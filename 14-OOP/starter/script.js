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

//////////////////////////////////////////////
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

// Inheritance Between "CLASSES": Constructor Functions
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // Don't worry why this is how it is
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(PersonCl.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof PersonCl);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

////////////////////////////////////////////*/
// Inheritance Between "Classes": ES6 Classes
/*class PersonCl {
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, program) {
    // Always needs to happen first!
    super(fullName, birthYear); // responsible for making "this" keyword in this class
    this.program = program;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.program}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old, but as a student I feel more like ${
        2024 - this.birthYear + 10
      }.`
    );
  }

  set program(program) {
    this._program = program;

    if (program === 'Computer Science') return;
    else
      console.log(
        `${program} is not a real program ${this.fullName
          .split(' ')
          .shift()}! lol`
      );
  }

  get program() {
    return this._program;
  }
}

const martha = new StudentCl('Martha Jones', 2002, 'Computer Science');
martha.introduce();
martha.calcAge();
console.log(martha);

const bob = new StudentCl('Bob Martin', 1978, 'Business');
bob.introduce();
const noah = new StudentCl('Tim Mueller', 1997, 'Graphic Design');
noah.introduce();

//////////////////////////////////////////////
// Inheritance Between "Classes": Object.create
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

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2002, 'Computer Science');
jay.introduce();
jay.calcAge();

//////////////////////////////////////////////
// Another Class Example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val)
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if(this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account('Doug', 'USD', 1234);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);

console.log(acc1.pin);

//////////////////////////////////////////////
// Encapsulation: Protected Properties and Methods
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // Protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account('Doug', 'USD', 1234);

acc1._movements.push(250); // still accessible but should know not to call in code. Just a coding convention for developers.
acc1.withdraw(50);
console.log(acc1.getMovements());

console.log(acc1);

////////////////////////////////////////////*/
// Encapsulation: Private Class Fields and Methods
// Currently still a proposal, not officially a part of JS yet.

// Public Fields
// Private Fields
// Public Methods
// Private Methods
// (there is also the static version)

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Methods are the same
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }

  static helper() {
    console.log(`Helper`);
  }

  // Private Methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Doug', 'USD', 1234);

acc1.deposit(250);
acc1.withdraw(50);

console.log(acc1);

// console.log(acc1.#movements);
console.log(acc1.getMovements());

// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(150));
acc1.requestLoan(500);
console.log(acc1);

Account.helper();
// acc1.helper();

////////////////////////////////////////////*/
// Chaining Methods
