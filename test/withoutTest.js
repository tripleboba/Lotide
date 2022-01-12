const without = require('../without');
// const assertArraysEqual = require('./assertArraysEqual');

// // TEST CASE using assertArraysEqual
// console.log('----- Test Case 1 ----');
// const test1 = without([1, 2, 3], [1]); // => [2, 3]
// assertArraysEqual(test1, [2, 3]);

// console.log('----- Test Case 2 ----');
// const test2 = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// assertArraysEqual(test2, ["1", "2"]);

// console.log('----- Test Case 3: not modify origin array ----');
// // test for the without() is return new [], not modify the original []
// const test3 = ["hello", "world", "lighthouse"];
// without(test3, ["lighthouse"]);
// assertArraysEqual(test3, ["hello", "world", "lighthouse"]);

// test using chai & mocha
const assert = require('chai').assert.deepEqual;
describe("#without", () => {
  it("Return [2, 3] for without([1, 2, 3])", () => {
    const test1 = without([1, 2, 3], [1]);
    assert(test1, [2, 3]);
  });
  it("Remove and return existing values in the array only", () => {
    const test2 = without(["1", "2", "3"], [1, 2, "3"]);
    assert(test2, ["1", "2"]);
  });
  it("without() doesn't modify original array", ()  => {
    const test3 = ["hello", "world", "lighthouse"];
    without(test3, ["lighthouse"]);
    assert(test3,["hello", "world", "lighthouse"]);
  });
});
