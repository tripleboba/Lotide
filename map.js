/*
map(array to map, callback func)
=> new [] based on the results of the callback func
*/

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;