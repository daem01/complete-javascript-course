'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} mph`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} mph`);
};

const myCar = new Car('Volkswagen', 120);
const bmw = new Car('BMW', 80);
const mercedes = new Car('Mercedes', 70);

myCar.accelerate();
myCar.brake();
myCar.brake();

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
