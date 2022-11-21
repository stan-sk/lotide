const without = function (source, itemToRemove) {
  let newArr = [];
  for (let item of source)
    if (!itemToRemove.includes(item)) {
      newArr.push(item)
    }
  return newArr;
}

module.exports = without;




