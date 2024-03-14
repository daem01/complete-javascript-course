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
/////////////////////////////////////*/
