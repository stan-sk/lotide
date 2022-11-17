const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};



const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
   if (actual[i] !== expected[i]) {
     return false;
   }
  }
  return true;
};






assertArraysEqual(middle([1]), []);
middle([1, 2]); // => []

assertArraysEqual(middle([1, 2, 3]), [2]);
middle([1, 2, 3]); // => [2]

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
middle([1, 2, 3, 4, 5]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
middle([1, 2, 3, 4]); // => [2, 3]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]