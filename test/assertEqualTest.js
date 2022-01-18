const assertEqual = require('./assertEqual');

console.log('----- Test Case 1 -----');
assertEqual(2, 2);  // true

console.log('----- Test Case 2 -----');
assertEqual('2', '2');      // true

console.log('----- Test Case 3 -----');
assertEqual(2, '2', 'expected to be false');    // false

console.log('----- Test Case 4 -----');
assertEqual(false, false);    // true

