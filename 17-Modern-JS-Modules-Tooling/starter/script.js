// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
/*
console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);
*/
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// in practice we never mix named and default exports in the same module
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apple', 3);

console.log(cart);
/*
/////////////////////////////////////////////////////////////////////////////////////////////////
// Top Level AWAIT
// Only available in modules, but blocks exuction of entire module because it's outside of async function. Can be harmful if you are waiting on long running task
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

// (async function () {
//   const last = await lastPost;
//   console.log(last);
// })();

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
/////////////////////////////////////////////////////////////////////////////////////////////////////
// The Module Pattern
// Possible through closures
// A closure allows a function to have access to all the variables that were present at its "birthplace"
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is $${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////
// CommonJS Modules
// Would work in NodeJS
// Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is $${shippingCost})`
//     );
//   };

// Import
// const { addToCart } = require('./shoppingCart.js');

////////////////////////////////////////////////////////////////////////////////////
// Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Configuring Babel and Polyfilling
if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const doug = new Person('Doug');

console.log('Doug' ?? null);

console.log(cart.find(el => el.quantity >= 3));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise'

// Polyfilling async functions
import 'regenerator-runtime/runtime';
