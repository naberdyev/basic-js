const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "") return "";
  let split = str.match(/(\w)\1*/g);
  let encodedString = "";
  for (let elem of split) {
    encodedString += `${elem.length > 1 ? elem.length : ""}${elem.charAt(0)}`;
  }
  return encodedString;
}

module.exports = {
  encodeLine,
};
