'use strict';
/*
//////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); // How to skip parameter to keep default value 

////////////////////////////////////////////////////
// How Passing Arguments Works: Value Vs. Reference
const flight = 'LH234';
const doug = {
  name: 'Douglas Moser',
  passport: 987234789345,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 987234789345) {
    alert('Check In');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, doug);
// console.log(flight);
// console.log(doug);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(doug);
checkIn(flight, doug); 

//////////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🖐');
};
document.body.addEventListener('click', high5);
['Doug', 'Beth', 'Brian'].forEach(high5); 

////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Doug');
greeterHey('Steven');

greet('Hello')('Doug');

// Rewrite as arrow functions -- CHALLENGE
const greet2 =
  (greeting = 'Hey') =>
  name => {
    console.log(`${greeting} ${name}`);
  };
const greeter = greet2();
greeter('Doug');

greet2('Hi')('Doug'); */

//////////////////////////////
// The Call and Apply Methods
