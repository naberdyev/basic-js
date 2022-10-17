const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let belowZero = [];
  let resultedSum = 0;
  for (let elem of matrix) {
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] === 0) {
        belowZero.push(i);
      }
      if (belowZero.indexOf(i) === -1) {
        resultedSum += elem[i];
      }
    }
  }
  return resultedSum;
}

module.exports = {
  getMatrixElementsSum,
};
