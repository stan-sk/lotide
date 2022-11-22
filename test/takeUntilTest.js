// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');
// const takeUntil = require('../takeUntil');




// //TEST CODE

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);



// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual((takeUntil(data1, x => x < 0)),[1, 2, 5, 7, 2])
// assertArraysEqual((takeUntil(data2, x => x === ',')),["I've", "been", "to", "Hollywood"])


const assert = require('chai').assert;
const takeUntil   = require('../takeUntil');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe("#takeUntil", () => {
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"])
  });
  // it("returns [1,2] for [1,2,3]", () => {
  //   assert.deepEqual(takeUntil(["1", "2", "3"], [1, 2, "3"]) ,["1", "2"])
  // });
});