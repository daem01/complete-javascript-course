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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  return this.charge;
};

EV.prototype.accelerate = function () {
  this.speed += 20;

  console.log(
    `${this.make} is going ${this.speed} with a charge of ${Math.round(
      this.chargeBattery(this.charge - this.charge * 0.01)
    )}%`
  );
};

const electricCar = new EV('Tesla', 20, 67);

electricCar.accelerate();
electricCar.accelerate();
electricCar.brake();
electricCar.brake();
electricCar.accelerate();

EV.prototype = EV;
console.log(electricCar.__proto__);
