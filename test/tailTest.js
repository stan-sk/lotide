const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');




console.log(assertArraysEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4 ,5]));
console.log(assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));

// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail