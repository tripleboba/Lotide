const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  const keyObj1 = Object.keys(obj1);
  const keyObj2 = Object.keys(obj2);

  if (keyObj1.length !== keyObj2.length) return false;

  for (let key of keyObj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      } else if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    }
  }
  return true;
};
console.log(eqObjects({id: 'ducckie'}, {name: 'abc'}));

module.exports = eqObjects;