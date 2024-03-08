/* Variables
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Bob';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let frank_bob = 'FB';
let $function = 1;

let person = 'Bob';
let PI = 3.1415;

let myCurentJob = 'IT Support Specialist';
let myNextJob = 'Front End Developer';
// VS.
let job1 = 'IT Support Specialist';
let job2 = 'Font End Developer';

console.log(myCurentJob);

// Data Types
let javaScriptIsFun = true;
console.log('JavaScript is FUN!', javaScriptIsFun);

console.log('true is a:', typeof true);
console.log('javaScriptIsFun is defined "true":', typeof javaScriptIsFun);
console.log('The number 23:', typeof 23);
console.log("'Bob':", typeof 'Bob');

javaScriptIsFun = 'YES!';
console.log("javaScriptIsFun redefined 'YES!':", javaScriptIsFun);

let year;
console.log('Variable year left undefined:', year);
console.log('Type of undefined variable:', typeof year);

year = 1991;
console.log('Variable year defined:', year);

console.log('typeof null:', typeof null);

// LET, CONST, VAR
let age = 30;
age = 31; // Reassingment or Mutation

const birthYear = 1991;
// birthYear = 1990; Throws TypeError

// const job; Throws SyntaxError - Needs initial value

// BEST CODING PRACTICE IS ALWAYS USE CONST UNLESS NEEDED TO CHANGE VARIABLE VALUE
// AVOID var

var job = 'Programmer';
job = 'Support Specialist';

// No Declaration still works but terrible idea
lastName = 'Moser';
console.log(lastName);


// Basic Operators
//Math operators
const now = 2024;
const ageDoug = now - 2001;
const ageSarah = now - 2003;
console.log(ageDoug, ageSarah);

console.log(ageDoug * 2, ageDoug / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'Doug';
const lastName = 'Moser';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // 25
x *= 4; // 100
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageDoug > ageSarah); // <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 2001 > now - 2003);
*/

const now = 2024;
const ageDoug = now - 2001;
const ageSarah = now - 2003;

console.log(now - 2001 > now - 2003);