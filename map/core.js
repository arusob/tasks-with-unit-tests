function multiplyBy10(array) {
  return array.map((num) => num * 10);
}

function shiftRight(array) {
  return array.map((val, index, arr) => {
    return arr[index - 1] || arr[arr.length - 1];
  });
}

function onlyVowels(array) {
  return array.map((word) => word.replace(/[^aeiou]/gi, ""));
}

function doubleMatrix(array) {
  return array.map((x) => x.map((y) => y * 2));
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
};
