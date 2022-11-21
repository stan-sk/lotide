// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Turns the array into strings and do comparsion this way otherwise will not work
// But this doesnt work with nested array []
//['1','2',['3']].toString() === ['1','2','3'].toString() // true for code, but logic wise should be false?



const tail = function(array) {
  const arrTail = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      arrTail.push(array[i]);
    }
  }
  return arrTail;
};

module.exports = tail;
