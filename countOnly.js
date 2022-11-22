const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) { // the value of the key is true
      if (result[item]) {  // to see if the key already exisit in the resulting object
        result[item]++; // counter +1 if already exisits
      } else {
        result[item] = 1; // assign it to 1 if it hasnt exisit
      }
    }
  }
  return result
}

module.exports = countOnly;
