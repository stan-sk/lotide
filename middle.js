const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result
  } else if (array.length % 2 === 0) {
    return [array[array.length/2 - 1], array[array.length/2]]
  } else {
    return [array[(array.length-1)/2]]
  }
};

module.exports = middle;

// assertArraysEqual(middle([1]), []);
// middle([1, 2]); // => []

// assertArraysEqual(middle([1, 2, 3]), [2]);
// middle([1, 2, 3]); // => [2]

// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// middle([1, 2, 3, 4, 5]); // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// middle([1, 2, 3, 4]); // => [2, 3]

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]


// TEST/ASSERTION FUNCTIONS
// const eqArrays = function(actual, expected) {
//   for (let i = 0; i < actual.length; i++) {
//    if (actual[i] !== expected[i]) {
//      return false;
//    }
//   }
//   return true;
// };


// const assertArraysEqual = function(actual, expected) {
//  let result = eqArrays(actual, expected);
//   if (result === true) {
//     assertArraysEqual(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//   } 
//   if (result === false) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
//   }
