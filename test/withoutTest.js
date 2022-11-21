const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');



console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3])) // => [2, 3]
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]) ,["1", "2"])) // => ["1", "2"]