const assert = require('chai').assert;
const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

describe('#middle', () => {
  it('return an empty array if less than three elements in the array', () => {
    assert.deepEqual(middle([1], [2]), []);
  });
  it('returns middle element if array contains odd number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('returns two middle elements if more than 3 elements and has even number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
})


//For arrays with one or two elements, there is no middle. Return an empty array.
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

// //For arrays with odd number of elements, an array containing a single middle element should be returned
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);

// //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
