const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else if (actual == null || expected == null) {
    return false;
  } else if (actual.length !== expected.length) {
    return false;
  }
   for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
   }
   return true;
};


module.exports = assertArraysEqual;





// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//    if (arr1[i] !== arr2[i]) {
//      return false;
//    }
//   }
//   return true;
// };