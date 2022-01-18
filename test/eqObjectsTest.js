// const assertObjectsEqual = require('./assertObjectsEqual');

// console.log('----- Test Case 1 -----');
// assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});

// console.log('---- Test Case 2 ----');
// assertObjectsEqual({}, {});

// console.log('---- Test Case 3: same keys different assigned values ----');
// assertObjectsEqual({name: 'duckie', weight: 10}, {name: 'duckie', weight: 2}, 'expected to fail'); // false

// console.log('---- Test Case 4: different keys same assigned values ----');
// assertObjectsEqual({name: 'duckie', weight: 10}, {name: 'duckie', height: 10}, 'expected to fail'); // false

// console.log('---- Test Case 5: same keys different data type of the values ----');
// assertObjectsEqual({a: "1", b: "2", c: "3"}, {a: "1", b: 2, c: "3"}, 'expected to fail'); // false

// console.log('---- Test Case 6: nested === arrays as values ----');
// assertObjectsEqual({c: "1", d: ["2", 3]}, {d: ["2", 3], c: "1"}); // true

// console.log('---- Test Case 7: nested !== arrays as values ----');
// assertObjectsEqual({c: "1", d: ["2", 3, 4]}, {d: ["2", 3], c: "1"}, 'expected to fail'); // false

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObject", () => {
  it("Primitive data {} with switch order check", () => {
    const test1 = eqObjects({a: 1, b: 2}, {b: 2, a: 1});
    assert.isTrue(test1);
  });
  it("2 empty {}s check", () => {
    const test2 = eqObjects({}, {});
    assert.isTrue(test2);
  });
  it("Return false for same keys - different values", () => {
    const test3 = eqObjects({name: 'duckie', weight: 10}, {name: 'duckie', weight: 2});
    assert.isFalse(test3);
  });
  it("Return false for same values - different keys", () => {
    const test4 = eqObjects({name: 'duckie', weight: 10}, {name: 'duckie', height: 10});
    assert.isFalse(test4);
  });
  it("Return false for same keys - different data type of values", () => {
    const test5 = eqObjects({a: "1", b: "2", c: "3"}, {a: "1", b: 2, c: "3"});
    assert.isFalse(test5);
  });
  it("Return true for same keys - same [] values", () => {
    const test6 = eqObjects({c: "1", d: ["2", 3]}, {d: ["2", 3], c: "1"});
    assert.isTrue(test6);
  });
  it("Return false for same keys - different [] values", () => {
    const test7 = eqObjects({c: "1", d: ["2", 3, 4]}, {d: ["2", 3], c: "1"});
    assert.isFalse(test7);
  });
});