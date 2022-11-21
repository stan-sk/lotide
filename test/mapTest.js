const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');






const words = ["ground", "control", "to", "major", "tom"];

const result1 = map(words, word => word[0]);
console.log(result1);

assertArraysEqual(map(words, word => word[0]), "ground")