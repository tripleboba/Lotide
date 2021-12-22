// TEST CASES
const assertEqual = (actual, expect) => {
  console.log(`Comparing ${actual} -vs- ${expect}`);
  actual === expect ? console.log(`✅ Pass: ${actual} === ${expect}`)
                    : console.log(`❌ Fail: ${actual} !== ${expect}`);
};

const test1 = countLetters('LHL');
const test2 = countLetters("lighthouse in the house");
assertEqual(test1['L'], 2);
assertEqual(test2['n'], 1);
assertEqual(test2['L'], undefined);