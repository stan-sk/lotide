const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array)
  if (callback(element) === false) {
    result.push(element);
  } else {
  return result
  }
}

module.exports = takeUntil;



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

