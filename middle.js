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

let middle = function(array) {//created a function named middle, which wille extract middle numbers
  let middleNum = [];//created a variable with an empty array to push to
  if (array.length <= 2) {//if the array length is less or equal to two then return variable middleNum which in this is an empty array
    return middleNum;//returns an empty array if condition met
  } else if ((array.length % 2 === 0)) {//if array length is an even number, run the code below
    middleNum = [array[array.length / 2 - 1], array[array.length / 2]];
    //above code, you re assign middleNum to the following: you divided the array by 2 which will give
    // you 3 which is a the second middle numnber so you subract by 1 to take you to index 2, the next one
    //takes you to index 3 which is the second middle number so you leave as is
  } else {
    middleNum = [array[Math.floor(array.length / 2)]];//if odd number you divide by two and use math.floor to round up
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

