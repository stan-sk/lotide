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

module.exports = letterPositions;



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