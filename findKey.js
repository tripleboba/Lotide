// apply callbacks to improve findKeyByValue function
const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) return key;
  }
  return 'No key for this value!';
};

module.exports = findKey;