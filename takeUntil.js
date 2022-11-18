const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
   if (arr1[i] !== arr2[i]) {
     return false;
   }
  }
  return true;
};

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



const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array)
  if (callback(element) === false) {
    result.push(element);
  } else {
  return result
  }
}





const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
