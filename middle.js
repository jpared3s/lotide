const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let middle = function(array) {
  let middleNum = [];
  if (array.length <= 2) {
    return middleNum;
  } else if ((array.length % 2 === 0)) {
    middleNum = [array[array.length / 2-1], array[array.length / 2]];
  } else {
    middleNum = [array[Math.floor(array.length / 2)]];
  }
  return middleNum;
};

//For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

//For arrays with odd number of elements, an array containing a single middle element should be returned
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);

