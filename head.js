// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


const head = function (array) {
  for (let i = 0; i < array.length; i++) {
    return array[0];
  }
}

assertEqual(head([1]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head