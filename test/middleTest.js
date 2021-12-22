const middle = require('../middle');
// const assertArraysEqual = require('./assertArraysEqual');

// console.log('----- Test Case 1 ----');
// assertArraysEqual(middle([]), []);

// console.log('----- Test Case 2 ----');
// assertArraysEqual(middle([1,2]), []);

// console.log('----- Test Case 3 ----');
// assertArraysEqual(middle([1,'here',3]), ['here']);

// console.log('----- Test Case 4 ----');
// assertArraysEqual(middle([1,'here','there',4]), ['here', 'there']);

// mocha and chai
const assert = require('chai').assert.deepEqual;

describe("#middle", () => {
  it("Check empty []: returns []", () => {
    assert(middle([]), []);
  });
  it("2 elements array: returns []", () => {
    assert(middle([1,2]), []);
  });
  it("Odd array: returns an array contains the middle element", () => {
    assert(middle([1,'here',3]), ['here']);
  });
  it("Even array: returns an array contains 2 middle element", () => {
    assert(middle([1,'here','there',4]), ['here', 'there']);
  });
});

