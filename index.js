/**
 * Files to return an object contains entire Lotide functions
 */

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const map = require('./map');
const without = require('./without');
const takeUntil = require('./takeUntil');
const letterPositions = require('./letterPositions');

const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

const countOnly = require('./countOnly');
const countLetters = require('./countLetters');

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

module.exports = {
  head:   head, // older syntax
  tail,
  middle,
  map, 
  without,
  takeUntil,
  letterPositions,
  findKey,
  findKeyByValue,
  countOnly,
  countLetters,
  eqArrays,
  eqObjects
};
