const { assert } = require('console');
const assertObjectsEqual = require('./assertObjectsEqual');

console.log('----- Test Case 1 -----');
assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});

console.log('---- Test Case 2 ----');
assertObjectsEqual({}, {});

console.log('---- Test Case 3: same keys different assigned values ----');
assertObjectsEqual({name: 'duckie', weight: 10}, {name: 'duckie', weight: 2}); // false

console.log('---- Test Case 4: different keys same assigned values ----');
assertObjectsEqual({name: 'duckie', weight: 10}, {name: 'duckie', height: 10}); // false