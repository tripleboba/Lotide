// TEST CASE using assertArraysEqual
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
const trueType =  (value) => {
  const arrString = value.map(x => typeof x === 'string' ? "\"" + x + "\"" : x);
  const result = "[" + arrString.join(", ") + "]";
  return result;
};
const assertArraysEqual = (actual, expect) => {
  const value1 = trueType(actual);
  const value2 = trueType(expect);
  console.log(`--Comparing ${value1} vs ${value2}`);
  eqArrays(actual, expect) ? console.log(`✅ Pass: ${value1} === ${value2}`)
                           : console.log(`❌ Fail: ${value1} !== ${value2}`);
};

const test1 = without([1, 2, 3], [1]); // => [2, 3]
assertArraysEqual(test1, [2, 3]);

const test2 = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual(test2, ["1", "2"]);

// test for the without() is return new [], not modify the original []
const test3 = ["hello", "world", "lighthouse"];
without(test3, ["lighthouse"]);
assertArraysEqual(test3, ["hello", "world", "lighthouse"]);
