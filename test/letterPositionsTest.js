const letterPositions = require('../letterPositions');
const assert = require('chai').assert.deepEqual;

describe("#letterPositions", () => {
  it("return correct letters index for a word", () => {
    const test1 = letterPositions('hello');
    assert(test1['l'], [2, 3]);
  });
  it("return correct letters index for a string", () => {
    const test2 = letterPositions('I have a cookie!');
    assert(test2['o'], [10, 11]);
  });
  it("return empty {} for no input and empty (no space) str", () => {
    const test3 = letterPositions('');
    assert(test3, {});
  });
});