const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

console.log(assertEqual("Raptors","Raptors"));
console.log(assertEqual(12, 12));