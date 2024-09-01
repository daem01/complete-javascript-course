'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} mph`);

    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} mph`);

    return this;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);

    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;

    console.log(
      `${this.make} is going ${this.speed} with a charge of ${Math.round(
        this.chargeBattery(this.#charge - this.#charge * 0.01)
      )}%`
    );

    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this.#charge;
  }
}

const gasCar = new CarCl('Volkswagen', 40);
const electricCar = new EVCl('Tesla', 20, 67);

gasCar.accelerate().brake().accelerate().accelerate();
electricCar.accelerate().accelerate().brake().brake().accelerate();

console.log(electricCar);
