// TEST CASES
const countOnly = require('../countOnly');
// const assertEqual = require('./assertEqual');

const firstNames = [ "Karl", "Salima", "Agouhanna",
                     "Fang", "Kavith", "Jason",
                     "Salima", "Fang", "Joe" ];
const namesToCount = { "Jason": true, "Karima": true,
                       "Fang": true, "Agouhanna": false };

const result = countOnly(firstNames, namesToCount);

// assertEqual(result["Jason"], 1);
// assertEqual(result["Karima"], undefined);
// assertEqual(result["Fang"], 2);
// assertEqual(result["Agouhanna"], undefined);

// mocha chai
const assert = require('chai').assert.strictEqual;
describe("#countOnly", () => {
  it("Count the name that appears 1 time", () => {
    assert(result["Jason"], 1);
  });
  it("Count the name that appears 2 times", () => {
    assert(result["Fang"], 2);
  });
  it("Return 'undefined' for a name that in the namesToCount list but not in the namesList", () => {
    assert(result["Karima"], undefined);
  });
  it("Not count the name in the namesList but is set 'false' in the namesToCount list", () => {
    assert(result["Agouhanna"], undefined);
  });
  it("Not creating the value for name that is in the namesToCount list but not in the namesList", () => {
    assert(result.hasOwnProperty("Karima"), false);
  })
});