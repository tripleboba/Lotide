/**
 *  Given an array and an obj
 *    + an array has various elements ['a', 'b', 'ab', 'abc']
 *    + an obj tells which elements to be counted (truthy value) {'a': true, 'ab': true, 'abc': false}
 * return an obj containing counts of everything that the input obj listed
 */
const countOnly = (allItems, itemsToCount) => {
  const result = {};  // an obj

  for (const item of allItems) {     // loop through allItems
    if (itemsToCount[item]) {        // because obj's value is set true obj[key] = true - obj[name] -> true
      result[item] ? result[item] += 1 : result[item] = 1;
    }
  }
  return result;
};

module.exports = countOnly;