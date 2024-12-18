// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// in practice we never mix named and default exports in the same module
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apple', 3);

console.log(cart);

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
