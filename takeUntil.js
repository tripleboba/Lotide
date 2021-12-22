// implementing a function similar to takeWhile Lodash
// takeUntil([], callback)
// the function keeps going until the callback returns true value

const takeUntil = (array, callback) => {
  const results = [];
  for (const element of array) {
    if (callback(element)) break;
    results.push(element);
  }
  return results;
};

module.exports = takeUntil;
