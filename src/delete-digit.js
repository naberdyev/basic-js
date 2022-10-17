const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let store = 0;
  n = (n + "").split("");
  for (let i = 0; i < n.length; i++) {
    let numbers = [...n];
    numbers.splice(i, 1);
    let joinedNum = +numbers.join("");
    if (joinedNum > store) {
      store = joinedNum;
    }
  }
  return store;
}

module.exports = {
  deleteDigit,
};
