/**
 * Files to return an object contains entire Lotide functions
 */

const head   = require('./head'); // auto test : checked
const tail   = require('./tail'); // auto test : checked
const middle = require('./middle'); // auto test : checked

const map = require('./map');
const without = require('./without'); // auto test : checked
const takeUntil = require('./takeUntil');
const letterPositions = require('./letterPositions'); // auto test : checked

const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

const countOnly = require('./countOnly'); // auto test : checked
const countLetters = require('./countLetters'); // auto test : checked

const eqArrays = require('./eqArrays'); // auto test : checked
const eqObjects = require('./eqObjects'); // auto test : checked

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
