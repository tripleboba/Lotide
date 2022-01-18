const assertEqual = require('./assertEqual');
const eqArrays = require('../eqArrays');

// console.log('---- Test Case 1 ----');
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// console.log('---- Test Case 2 ----');
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// console.log('---- Test Case 3 ----');
// assertEqual(eqArrays([],[]), true); // true
// assertEqual(eqArrays([], [0]), false); // false

const assert = require('chai').assert;
describe("#eqArrays", () => {
  it("Return true if 2 []s same values - same orders", () => {
    const test = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.isTrue(test);
  });
  it("Return false if 2 []s same values - not same orders", () => {
    const test = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.isFalse(test);
  });
  it("Return true if 2 []s same values - same data types", () => {
    const test = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    assert.isTrue(test);
  });
  it("Return false if 2 []s same values - not same data types", () => {
    const test = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    assert.isFalse(test);
  });
  it("Return true if 2 []s both empty", () => {
    const test = eqArrays([], []);
    assert.isTrue(test);
  });
  it("Return false if 2 []s have different length", () => {
    const test = eqArrays([], [0]);
    assert.isFalse(test);
  });

});