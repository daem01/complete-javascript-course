'use strict';
/* SCOPES
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}!`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2001) {
      var millenial = true;
      //   Creating New variable with same name as outer scope variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      //   Reassigning outer scope variable
      output = 'NEW OUTPUT';
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Doug';
calcAge(2001);

// console.log(age);
// printAge(); 

// Hoisting with Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Doug';
let job = 'IT Support';
const year = 2001;

// Hoisting with Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10; // Don't use var

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z); 

// THIS KEYWORD
console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge(2001);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAgeArrow(2001);

const doug = {
  year: 2001,
  calcAge: function () {
    console.log(this); // this Object that calls method --> see matilda
    console.log(2024 - this.year);
  },
};

doug.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = doug.calcAge;
matilda.calcAge();

const f = doug.calcAge;
f(); 

// REGULAR FUNCTIONS VS ARROW FUNCTIONS
// var firstName = 'Matilda';

const doug = {
  firstName: 'Doug',
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    // Solution 1
    // const self = this; // Pre-ES6 fix to calling 'this' in function
    // const isMillenial = function () {
    //   console.log(self.year >= 1991 && self.year <= 2001);
    //   //   console.log(this.year >= 1991 && this.year <= 2001);
    // };

    // Solution 2
    const isMillenial = () => {
      // Arrow function inherits 'this' from parent scope
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 2001);
    };
    isMillenial(); // regular function call has 'this' set to undefined
  },

  greet: () => console.log(`Hey ${this.firstName}`), // Arrow functions don't get their own 'this' keyword; calls from 'window'; never ever use arrow function as a method
};

doug.greet();
doug.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments); // Does not exist in arrow functions
  return a + b;
};
addArrow(2, 5, 8);


// PRIMITIVES VS OBJECTS (PRIMITIVES VS REFERENCE TYPES)
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Doug',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', friend);
// Both log age as 27 due to the way memory is stored in callstack and heap
*/

// PRIMITIVES VS OBJECTS IN PRACTICE
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);

// Copying object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // doesn't work on object inside of object
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage:', jessica2);
console.log('After Marriage:', jessicaCopy);

jessicaCopy.family.push('Maria'); // family is a nested object and therefore the Object.assign doesn't work for this -- Deep cloning is possible but very difficult without external library
jessicaCopy.family.push('John');
console.log('Before Marriage:', jessica2);
console.log('After Marriage:', jessicaCopy);
