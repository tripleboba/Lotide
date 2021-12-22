// const assertEqual = require('./assertEqual');
const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// // JS doesn't allow to compare [] directly with each other
// assertEqual(result, ["Lighthouse", "Labs"], 'assertEqual not for checking 2 arrays ==='); // => will always fail!

// // Test Case 1: Check the returned array elements
// console.log('\n--- Test Case 1 ---');
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: Check empty []
// console.log('\n--- Test Case 2: Check empty [] ---');
// assertEqual(tail([]), undefined);

// Test Case 3: Check the original array
// console.log('\n--- Test Case 3: Not modifying the original array ---');
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test Case 4: Longer arr
// console.log('\n--- Test Case 4: Longer array tail ---');
// const lArr = tail([0, 1, "A", 3, 'ABC', 5]);
// assertEqual(lArr.length, 5);
// assertEqual(lArr[0], 1);
// assertEqual(lArr[1], "A");
// assertEqual(lArr[2], 3);
// assertEqual(lArr[3], 'ABC');
// assertEqual(lArr[4], 5);
// mocha and chai
const assert = require('chai').assert.deepEqual;

describe("#tail", () => {
  it('Check empty [] returns undefined', () => {
    assert(tail([]), undefined);
  });
  it("Function returns ['duck', 'is', 'named', 'duckie'] for ['The', 'duck', 'is', 'named', 'duckie']", () => {
    assert(tail(['The', 'duck', 'is', 'named', 'duckie']), ['duck', 'is', 'named', 'duckie']);
  });
  it("Function does not modify the original array", () => {
    const original = ['The', 'duck', 'is', 'named', 'duckie'];
    tail(original);
    const after = original;
    assert(original, after);
  });
});