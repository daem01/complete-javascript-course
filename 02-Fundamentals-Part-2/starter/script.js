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
///////////////////////*/
