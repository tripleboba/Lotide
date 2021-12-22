// const assertEqual = require('./assertEqual');
const head = require('../head');

// console.log("\n ---- TEST CASE HEAD.JS FUNCTION ----");
// assertEqual(head([5, 6, 7]), 5); // pass
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //pass
// assertEqual(head([]), undefined); // pass
// assertEqual(head([0]), [], 'expected to be fail [0] vs []'); // fail

// mocha and chai
const assert = require('chai').assert.strictEqual;

describe("#head", () => {
  it("Check empty [] returns undefined", () => {
    assert(head([]), undefined);
  });
  it("String array: returns '5' for ['5']", () => {
    assert(head(['5']), '5'); 
  });
  it ('Number array: returns 1 for [1, 2, 3]', () => {
    assert(head([1, 2, 3]), 1);
  });
  it("Longer array: returns 'The' for ['The', 'duck', 'named', 'duckie']", () => {
    assert(head(['The', 'duck', 'named', 'duckie']), 'The');
  });
});