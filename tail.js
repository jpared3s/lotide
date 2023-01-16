const assertEqual = require('./assertEqual')

const tail = function(array) {
  let sliceArr = array.slice(1);
  console.log(sliceArr)
  return sliceArr;
};

module.exports = tail;