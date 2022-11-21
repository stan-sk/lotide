const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');




const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;







// const eqArrays = function(actual, expected) {
//   for (let i = 0; i < actual.length; i++) {
//    if (actual[i] !== expected[i]) {
//      return false;
//    }
//   }
//   return true;
// };


// const assertArraysEqual = function(actual, expected) {
//   if (actual === expected) {
//     return true;
//   } else if (actual == null || expected == null) {
//     return false;
//   } else if (actual.length !== expected.length) {
//     return false;
//   }
//    for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       return false;
//     }
//    }
//    return true;
// };