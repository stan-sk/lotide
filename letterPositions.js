const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (result === false) {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

  return results;// logic to update results here
}

const results = letterPositions("hello world");
console.log(results)
// console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);