const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }

};

module.exports = assertObjectsEqual;




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

// const eqObjects = function(object1, object2) {
//   let result = false;
//   let keys1 = Object.keys(object1);
//   let keys2 = Object.keys(object2);
  
//   if (keys1.length !== keys2.length) {
//     return false
//   } 
//   for (let key in object1) {
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       if (eqArrays(object1[key], object2[key]) === false) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };