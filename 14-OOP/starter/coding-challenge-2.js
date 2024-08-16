class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} mph`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} mph`);
  }

  get speedEU() {
    return this.speed * 1.6;
  }

  set speedEU(speed) {
    this.speed = speed / 1.6;
  }
}

const myCar = new CarCl('Volkswagen', 87);

myCar.brake();
myCar.accelerate();
myCar.accelerate();
myCar.brake();

console.log('\n');

myCar.speedEU = 120;
myCar.brake();
myCar.speedEU = 200;
myCar.accelerate();
