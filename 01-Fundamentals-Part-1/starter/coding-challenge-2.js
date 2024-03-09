// Masses
let massMark = 78;
let massJohn = 92;

// Heights
let heightMark = 1.69;
let heightJohn = 1.95;

// Units of Measure
const weightUnit = 'kg';
const heightUnit = 'm';

// BMIs
let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;

console.log("Data 1:");
console.log("Mark weighs", massMark + weightUnit, "and is", heightMark + heightUnit, "tall.")
console.log("Mark's BMI is", BMIMark);

console.log("John weighs", massJohn + weightUnit, "and is", heightJohn + heightUnit, "tall.")
console.log("John's BMI is", BMIJohn);

console.log("Is Mark's BMI heigher than John's:", BMIMark > BMIJohn);

// Added Code
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
};

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
};

console.log(" ");

massMark = 95;
massJohn = 85;

heightMark = 1.88;
heightJohn = 1.76;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;

console.log("Data 2:");
console.log("Mark weighs", massMark + weightUnit, "and is", heightMark + heightUnit, "tall.")
console.log("Mark's BMI is", BMIMark);

console.log("John weighs", massJohn + weightUnit, "and is", heightJohn + heightUnit, "tall.")
console.log("John's BMI is", BMIJohn);

console.log("Is Mark's BMI heigher than John's:", BMIMark > BMIJohn);

// Added Code
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
};

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
};