'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////
// Creating DOM Elements
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Computing Usernames
const createUsername = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);
// console.log(accounts);

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // display summary
  calcDisplaySummary(acc);
};

// Reduce Method Continued
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

// The Magic of Chaining Methods Continued
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes} €`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${interest} €`;
};

// Implementing Login
// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent Form From Submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // field loses focus

    // Update UI
    updateUI(currentAccount);
  }
});

// Implementing Transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

/////////////////////////////////////////
// The findIndex Method
// Close Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // .indexOf(23)
    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

//////////////////
// Some and Every
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    // Clear input field
    inputLoanAmount.value = '';
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
/////////////////////////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE -- does not mutate
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); //creates shallow copy just like using spread operator [...arr]

// SPLICE -- similar to SLICE but mutates original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // second input is delete count, here we delete 2 from starting at index 1
console.log(arr);

// REVERSE -- mutates original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT -- does not mutate
// console.log([...arr, ...arr2]);
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join(' - ')); 

/////////////////////
// The New AT Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// also works on strings
console.log('doug'.at(0));
console.log('doug'.at(-1)); 

///////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- forEach -----');
// always passes in order (current element, current index, entire array)
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// behind the scenes
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ... 

//////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  // underscore can be used as universal throw away character
  console.log(`${value}: ${value}`); // key is exactly the same as value for sets
}); 

/////////////////////////////////////////////
// Data Transformations: Map, Filter, Reduce
// The Map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   // Returns new array
//   return mov * euroToUSD;
// });
console.log(movements);
// console.log(movementsUSD);

// Mini Challenge -- make map() method with arrow function
const movementsUSDArrow = movements.map(mov => mov * euroToUSD);
console.log(movementsUSDArrow);

// vs

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUSD);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions); 

// The Filter Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0; // trick is to return a boolean value
});
console.log(movements);
console.log(deposits);

// vs

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// Mini Challenge -- create array for withdrawals
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); 

/////////////////////
// The Reduce Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

//  accumulator --> SNOWBALL
// const balance = movements.reduce(function(accumulator, value, i, arr) {
//   console.log(`Iteration ${i}: ${accumulator}`);
//   return accumulator + value;
// }, 100); // this argument defines what accumulator starts at -- first iteration === 100

const balance = movements.reduce(
  (accumulator, value, i, arr) => accumulator + value,
  100
);
console.log(balance);

// vs

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max); 

/////////////////////////////////
// The Magic of Chaining Methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// PIPELINE
const euroToUSD = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUSD)
  // how to inspect current array during any stage of pipline
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   return mov * euroToUSD;
  // })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD); 

///////////////////
// The FIND Method
const firstWithdrawal = movements.find(mov => mov < 0); // reutrns boolean like filter method
console.log(movements);
console.log(firstWithdrawal); // only returns first occurrence, and not array

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// vs

let accountOf;
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') accountOf = acc;
}
console.log(accountOf); 

//////////////////
// Some and Every
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0); // a better name for method would be .any() and thats a good way to think about it
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(
  account4.movements,
  account4.movements.every(mov => mov > 0)
);

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */

// Flat and Flatmap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// flat
const overallBalanceChained = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceChained);

// flatmap
const overallBalanceChained2 = accounts
  .flatMap(acc => acc.movements) // only goes one level deep, if you need to go deeper than use flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceChained);

// Sorting Arrays
