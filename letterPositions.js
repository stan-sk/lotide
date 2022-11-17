const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (result === false) {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const letterPositions = function(sentence) {
  let results = {};
  for (const i in sentence) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    }

    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(Number(i));

  } 

  return results;
}

const results = letterPositions("hello world");
console.log(results)
// console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);