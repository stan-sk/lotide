const findKeyByValue = function(genre, show) {
  for (let key in genre) {
    if (genre[key] === show) {
      return key
    } 
  }
  return undefined
}

module.exports = findKeyByValue;

