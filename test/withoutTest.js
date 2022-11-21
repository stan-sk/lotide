// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');
// const without = require('../without');



// console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3])) // => [2, 3]
// console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]) ,["1", "2"])) // => ["1", "2"]


const assert = require('chai').assert;
const without   = require('../without');


describe("#without", () => {
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3])
  });
  it("returns [1,2] for [1,2,3]", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]) ,["1", "2"])
  });
});