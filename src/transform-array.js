const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let resultedArr = [...arr];
  for (let i = 0; i < resultedArr.length; i++) {
    if (resultedArr[i] === undefined) continue;
    switch (resultedArr[i]) {
      case "--discard-next":
        if (resultedArr[i + 1] === undefined) {
          delete resultedArr[i];
          continue;
        }
        delete resultedArr[i + 1];
        delete resultedArr[i];
        break;
      case "--discard-prev":
        if (resultedArr[i - 1] === undefined || i < 0) {
          delete resultedArr[i];
          continue;
        }
        delete resultedArr[i - 1];
        delete resultedArr[i];
        break;
      case "--double-next":
        if (resultedArr[i + 1] === undefined) {
          delete resultedArr[i];
          continue;
        }
        resultedArr[i] = resultedArr[i + 1];
        break;
      case "--double-prev":
        if (resultedArr[i - 1] === undefined || i < 0) {
          delete resultedArr[i];
          continue;
        }
        resultedArr[i] = resultedArr[i - 1];
      default:
        break;
    }
  }
  let result = [];
  resultedArr.forEach((a) => result.push(a));
  return result;
}

module.exports = {
  transform,
};
