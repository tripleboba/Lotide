// Comparing 2 primitive variables if it's the same
const assertEqual = (actual, expect, msg = "note?") => {
  console.log(`Actual Output: ${trueType(actual)} || Expect Outputs: ${trueType(expect)}`);
  actual === expect ? console.log(`✅✅ Pass: ${trueType(actual)} === ${trueType(expect)}\n`)
                    : console.log(`❌❌ Fail: ${trueType(actual)} !== ${trueType(expect)}`
                                + `🔖: ${msg}\n`);
};

// Function for displaying the type of variables (optional)
const trueType =  (string) => {
  return typeof string === 'string' ? "\"" + string + "\"" : string;
};

module.exports = assertEqual;