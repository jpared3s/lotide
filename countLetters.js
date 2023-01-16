const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {

  const results = {};
  let lowerString = string.toLowerCase();
  for (const letter of lowerString) {
    //check if key is already inside object
    if (results[letter]) {
      results[letter] += 1;
    } else {
      //create new key inside object
      results[letter] = 1;
    }
    
    // results[string[letter]] = ((results[string[letter]]) ? results[string[letter]] : 0) + 1;
    // return results[string[letter]] = [letter];
    // console.log(letter);
  }
  return results;
};
const letter = countLetters('Toronto Raptors');
assertEqual(letter["t"], 3);
assertEqual(letter["o"], 4);
assertEqual(letter["r"], 3);
assertEqual(letter["n"], 1);
assertEqual(letter["a"], 1);
assertEqual(letter["p"], 1);
assertEqual(letter["s"], 1);

module.exports = countLetters;