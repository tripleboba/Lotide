const findKeyByValue = function (obj, value) {
  for (let key in obj) {
    return obj[key] === value ? key : null;
  }
};

module.exports = findKeyByValue;