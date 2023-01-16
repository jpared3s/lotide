// const assertEqual = require('../assertEqual');
// const head = require('../head');

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5')
  });
  it('not returning another element in the array', () => {
    assert.notEqual(head([5,6,7]), 6);
  });
  it('should not return another element other than the first', () => {
    assert.notEqual(head(["Hello", "Lighthouse", "Labs"]), "Raptors");
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  })
  it('it should not return a value when empty', () => {
    assert.notEqual(head([]), "Hello");
  });
});


// assertEqual(head([5,6,7]), 6);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Raptors");
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), "Hello");
