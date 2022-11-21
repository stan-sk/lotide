const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result
  } else if (array.length % 2 === 0) {
    return [array[array.length/2 - 1], array[array.length/2]]
  } else {
    return [(array[(array.length-1)/2])]
  }
};


module.exports = middle;


