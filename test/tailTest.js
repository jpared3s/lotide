// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns that length of the array tail minus the head', () => {
    assert.strictEqual(tail([5,6,7]).length, 2);
  });
});

// const result = tail([5,6,7]);
// assertEqual(result.length, 2);