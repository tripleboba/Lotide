const assertEqual = require('./assertEqual');
const eqArrays = require('../eqArrays');

console.log('---- Test Case 1 ----');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

console.log('---- Test Case 2 ----');
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

console.log('---- Test Case 3 ----');
assertEqual(eqArrays([],[]), true); // true
assertEqual(eqArrays([], [0]), false); // false