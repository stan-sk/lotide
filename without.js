
const without = function(source, itemsToRemove) {
  let updatedItems = [];
  for (let i = 0; i < source.length; i++) {
    let matches = [];
    for (let x = 0; x < itemsToRemove.length; x++) {
      
      if (source[i] === itemsToRemove[x]) {
        matches.push(source[i]);
      }
    }
    if (matches.indexOf(source[i]) === -1) {
      updatedItems.push(source[i]);
    }
  }
  return updatedItems;
}



console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["5", "6", "7"], [1, 7, "6"]));


/*
const without = function (arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString() !== item.toString()) {
      newArr.push(arr[i]);
    }
  }
  return newArr
}


console.log(without(["1", "2", "3"], [1, 2, "3"]))
*/