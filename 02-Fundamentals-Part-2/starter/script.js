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
//////////////////////*/
