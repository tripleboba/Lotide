const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  // check if 2 objs have the same # of keys 
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  
  for (let key in obj2) {
    // check if keys in 2 objs are the same
    if (!obj1.hasOwnProperty(key)) return false;

    // nested array
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else {
      // check primitive values of the same key
      if ((obj1[key] !== obj2[key])) return false; 
    }
  }

  return true;
};

module.exports = eqObjects;