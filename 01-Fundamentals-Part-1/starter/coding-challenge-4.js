let bill = 275;
let tip;

console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.20}, and the total value ${bill + tip}`);

bill = 40;
console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.20}, and the total value ${bill + tip}`);

bill = 430;
console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.20}, and the total value ${bill + tip}`);