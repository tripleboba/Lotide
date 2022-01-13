// const assertEqual = require('./assertEqual');
const countLetters = require('../countLetters');
// TEST CASES
// const assertEqual = (actual, expect) => {
//   console.log(`Comparing ${actual} -vs- ${expect}`);
//   actual === expect ? console.log(`✅ Pass: ${actual} === ${expect}`)
//                     : console.log(`❌ Fail: ${actual} !== ${expect}`);
// };
// const test1 = countLetters('ABCA');
// const test2 = countLetters("You have a cookie, you have a cookie!");
// assertEqual(test1['A'], 2);
// assertEqual(test2['o'], 6);
// assertEqual(test2['n'], undefined);

// mocha chai test cases
const assert = require('chai').assert.strictEqual;
describe("#countLetters", () => {
  it("Count letters in a word", () => {
    const test1 = countLetters('ABCA');
    assert(test1['A'], 2);
  });
  it("Count letters in a string", () => {
    const test2 = countLetters("You have a cookie, you have a cookie!");
    assert(test2['o'], 6);
  });
  it("Return undefinded for letters that are not in given string", () => {
    const test3 = countLetters("Mmmmm!")
    assert(test3['n'], undefined);
  });
  it("Return empty {} for no input/empty string/space and symbols string ", () => {
    const test4 = countLetters("<>:? )(*&%$");
    // return an empty [] of key (because using strictEqual)
    assert(Object.keys(test4).length, 0);
    // for assert.deepEqual
    // assert(test4, {})
  });
});
