// TEST CASES
const assertEqual = (actual, expect) => {
  console.log(`Comparing ${actual} -vs- ${expect}`);
  actual === expect ? console.log(`✅ Pass: ${actual} === ${expect}`)
                    : console.log(`❌ Fail: ${actual} !== ${expect}`);
};

const firstNames = [ "Karl", "Salima", "Agouhanna",
                     "Fang", "Kavith", "Jason",
                     "Salima", "Fang", "Joe" ];
const namesToCount = { "Jason": true, "Karima": true,
                       "Fang": true, "Agouhanna": false };

const result1 = countOnly(firstNames, namesToCount);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);