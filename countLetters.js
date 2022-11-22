const countLetters = function (string) {
  let result = {};
  for (let character of string) {
    if (character !== " ") {
      if (!result[character]) {
        result[character] = 1;  // left hand side is key; right hand side is value
      } else {
        result[character] += 1;
      }
    }
  }
  return result
}

module.exports = countLetters;




// (!result[character]) or (result[character] === undefined)
//check if value exisit yet