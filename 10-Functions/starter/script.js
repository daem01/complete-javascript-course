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
checkIn(flight, doug); */

//////////////////////////////////////////
// Functions Accepting Callback Functions
