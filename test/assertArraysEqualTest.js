const assertArraysEqual = require('./assertArraysEqual');

console.log('----- Test Case 1 -----');
assertArraysEqual([1, '2', 3], [1, '2', 3]);  // true

console.log('----- Test Case 2 -----');
assertArraysEqual([1, 2, 3], [1, 2, 3]);      // true

console.log('----- Test Case 3 -----');
assertArraysEqual([1, 2, 3], [1, '2', 3], 'expected to be false');    // false

console.log('----- Test Case 4 -----');
assertArraysEqual([], []);                    // true