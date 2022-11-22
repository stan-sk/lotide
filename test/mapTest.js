
const assert = require('chai').assert;
const map   = require('../map');




const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("returns [g, c, t, m, t]", () => {
    assert.deepEqual((map(words, word => word[0]), "ground"), ['g', 'c', 't', 'm', 't']);
  });
  // it("returns [] for [1, 2]", () => {
  //   assert.deepEqual(middle([1, 2]), []);
  // });
  // it("returns [2] for [1, 2, 3]", () => {
  //   assert.deepEqual(middle([1, 2, 3]), [2]);
  // });
  // it("returns [2, 3] for [1, 2, 3, 4]", () => {
  //   assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  // });
});