const eqArrays = require('../eqArrays');

// implement assertArraysEqual
const assertArraysEqual = (arr1, arr2, msg = "note?") => {
  console.log(`Array 1: ${trueType(arr1)} || Array 2: ${trueType(arr2)}`);
  eqArrays(arr1, arr2) ? console.log(`✅✅ Pass: ${trueType(arr1)} === ${trueType(arr2)}\n`)
                       : console.log(`❌❌ Fail: ${trueType(arr1)} !== ${trueType(arr2)}\n`
                                   + `🔖: ${msg}\n`);
};

/**
* for displaying when console.log since console.log auto toString variables (optional)
* code from mentor ! to console.log the true type of data
* console.log() auto convert data toString -> [1, '2', 3] -> 1, 2, 3
*/
const trueType = (value) => {
  // const arr = value;
                    // was arr
  const arrString = value.map(x => typeof x === 'string' ? `"${x}"` : x);
  const result = `[${arrString.join(", ")}]`;
  return result;
};

module.exports = assertArraysEqual;