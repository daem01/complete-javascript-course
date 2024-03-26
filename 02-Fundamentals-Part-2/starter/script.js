/* 
/////////////////////
STRICT MODE
/////////////////////
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I Can Drive!');

// const interface = 'Audio'; // strict mode reserves words that could be used in the future in js
// const private = 534;


////////////////////
FUNCTIONS
////////////////////
function logger() {
    console.log('My name is Doug');
};

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


//////////////////////////////////////
FUNCTION DECLARATIONS VS. EXPRESSIONS
/////////////////////////////////////
// Function declaration
const age1 = calcAge1(1991);  // Can call function declaration before initialized

function calcAge1(birthYear) {
    return 2024 - birthYear;
}

console.log(age1);

// Function expression
const calcAge2 = function (birthYear) { // Forces you to initialize all functions at top of page
    return 2024 - birthYear;
}
const age2 = calcAge2(2006);
console.log(age2);

///////////////
ARROW FUNCTIONS
///////////////
// Function Expression  **Reference
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

// Arrow Function
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(2001, 'Doug'));
console.log(yearsUntilRetirement(1978, 'Bob'));

//////////////////////////////////
FUNCTIONS CALLING OTHER FUNCTIONS
/////////////////////////////////
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
};

console.log(fruitProcessor(2, 3));

////////////////////
Reviewing Functions
///////////////////
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🥳`);
        return -1;
    }

    return retirement;
    // return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(2001, 'Doug'));
console.log(yearsUntilRetirement(1956, 'Mike'));
///////////////////////
INTRODUCTION TO ARRAYS
//////////////////////
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Doug';
const doug = [firstName, 'Moser', 2024 - 2001, 'IT Support Specialist', friends]
console.log(doug);

// Exercise
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// My Own Exploration Skipping Ahead LOL
console.log(`Using For Loop:`);
for (let i = 0; i < years.length; i++) {
    const element = years[i];
    console.log(calcAge(element));
}
// or
console.log(`Using While Statement:`);
let index = 0;
while (index < years.length) {
    console.log(calcAge(years[index]));
    index++;
}
/////////////////////////////////
BASIC ARRAY OPERATIONS (METHODS)
////////////////////////////////
const friends = ['Michael', 'Steven', 'Peter'];

// Add Elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Elements
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // Doesn't do TYPE COERCION
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven.');
}
////////////////////////
INTRODUCTION TO OBJECTS
///////////////////////
const doug = {
    firstName: 'Doug',
    lastName: 'Moser',
    age: 2024 - 2001,
    job: 'IT Support Specialist',
    friends: ['Mike, Isaac, Aaron, Garrett']
};
/////////////////////////
DOT VS. BRACKET NOTATION
////////////////////////
const doug = {
    firstName: 'Doug',
    lastName: 'Moser',
    age: 2024 - 2001,
    job: 'IT Support Specialist',
    friends: ['Mike', 'Isaac', 'Aaron', 'Garrett']
};
console.log(doug);

console.log(doug.lastName);
console.log(doug['lastName']);

const nameKey = 'Name';
console.log(doug['first' + nameKey]);
console.log(doug['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Doug? Choose between firstName, lastName, age, job, and friends.');

// if (doug[interestedIn]) {
//     console.log(doug[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
// }

doug.location = 'Illinois';
doug['instagram'] = '@dougmoser_';
console.log(doug);

// Challenge
// Log "Doug has 3 friends, and his best friend is Mike" dynamically.
console.log(`${doug.firstName} has ${doug.friends.length} friends, and his best friend is ${doug.friends[0]}.`)

///////////////
OBJECT METHODS
//////////////
const doug = {
    firstName: 'Doug',
    lastName: 'Moser',
    birthYear: 2001,
    job: 'IT Support Specialist',
    friends: ['Mike', 'Isaac', 'Aaron', 'Garrett'],
    hasDriversLicense: true,

    // function expression
    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // this keyword
    // calcAge: function () {
    //     // console.log(this);
    //     return 2024 - this.birthYear;
    // }

    // storing value in new key --- most effiecient solution
    calcAge: function () {
        this.age = 2024 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${this.hasDriversLicense ? 'has' : "doesn't have"} a driver's license.`
    }
};

console.log(doug.calcAge());

console.log(doug.age);
console.log(doug.age);
console.log(doug.age);

// Challenge
// Write "Doug is a 23 year old IT Support Specialist, and he has a/no driver's license." dynamically
console.log(`${doug.firstName} is a ${doug.age} year old ${doug.job}, and he ${doug.hasDriversLicense ? 'has' : "doesn't have"} a driver's license.`)

console.log(doug.getSummary());

////////////////////////
ITERATION: THE for LOOP
///////////////////////
// console.log('Lifting weights repietition 1');
// console.log('Lifting weights repietition 2');
// console.log('Lifting weights repietition 3');
// console.log('Lifting weights repietition 4');
// console.log('Lifting weights repietition 5');
// console.log('Lifting weights repietition 6');
// console.log('Lifting weights repietition 7');
// console.log('Lifting weights repietition 8');
// console.log('Lifting weights repietition 9');
// console.log('Lifting weights repietition 10');

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i} 🏋️‍♂️.`)
}

////////////////////////////////////////
LOOPING ARRAYS. BREAKING AND CONTINUING
///////////////////////////////////////
const dougArray = [
    'Doug',
    'Moser',
    2024 - 2001,
    'IT Support Specialist',
    ['Mike, Isaac, Aaron, Garrett'],
    true
];

const typeArray = [];

for (let i = 0; i < dougArray.length; i++) {
    // Reading from dougArray
    console.log(dougArray[i], typeof dougArray[i]);

    // Filling typeArray
    typeArray.push(typeof dougArray[i]);
}

console.log(typeArray);

// Practical Example
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}
console.log(ages);

// Continue and Break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < dougArray.length; i++) {
    if (typeof dougArray[i] !== 'string') continue;

    console.log(dougArray[i], typeof dougArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < dougArray.length; i++) {
    if (typeof dougArray[i] === 'number') break;

    console.log(dougArray[i], typeof dougArray[i]);
}

/////////////////////////////////////
LOOPING BACKWARDS AND LOOPS IN LOOPS
////////////////////////////////////
const dougArray = [
    'Doug',
    'Moser',
    2024 - 2001,
    'IT Support Specialist',
    ['Mike, Isaac, Aaron, Garrett']
];

for (let i = dougArray.length - 1; i >= 0; i--) {
    console.log(i, dougArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----- Starting Exercise ${exercise}.`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Excersice ${exercise}: Rep ${rep} 🏋️‍♂️`);
    }
}

///////////////
THE WHILE LOOP
//////////////*/
// for (let i = 1; i <= 10; i++) {
//     console.log(`FOR: Lifting weights repetition ${i} 🏋️‍♂️.`)
// }

let rep = 1;

while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️.`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`You rolled a ${dice}!`);
// }

// If first roll is 6 then nothing will log to console
// Quick fix off the top of the dome
// Doesn't work after previous while loop because dice already === 6 by the end of it.
if (dice === 6) {
    console.log(`You rolled a ${dice}! 🎲`);
} else {
    while (dice !== 6) {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        if (dice === 6) console.log(`Finally! You rolled a ${dice}!`);
    }
}