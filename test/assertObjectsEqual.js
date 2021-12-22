const eqObjects = require('../eqObjects');

const assertObjectsEqual = function(obj1, obj2, msg = "note?") {
  const inspect = require('util').inspect;
  console.log(`Object 1: ${inspect(obj1)} || Object 2: ${inspect(obj2)}`);
  eqObjects(obj1, obj2) === true ? console.log(`✅✅ Pass: ${inspect(obj1)} === ${inspect(obj2)}}\n`)
                                 : console.log(`❌❌ Fail: ${inspect(obj1)} !== ${inspect(obj2)}}\n`
                                             + `🔖: ${msg}\n`);
};

module.exports = assertObjectsEqual;