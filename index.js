// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map = require('./map');
const letterPositions = require('./letterPositions');
const without = require('./without');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');


module.exports = {
  head,
  tail,
  middle,
  map,
  letterPositions,
  without,
  takeUntil,
  findKey,
  findKeyByValue,
  countOnly,
  countLetters,
  assertObjectsEqual,
  assertEqual,
  assertArraysEqual,
  eqArrays,
  eqObjects
};