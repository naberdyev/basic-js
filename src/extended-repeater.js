const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let defaultOptions = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionSeparator: "|",
    additionRepeatTimes: 1,
  };
  Object.assign(defaultOptions, options);
  let arr = [];
  let additionArr = [];
  for (let k = 0; k < defaultOptions.additionRepeatTimes; k++) {
    additionArr.push("" + defaultOptions.addition);
  }
  let repeatedAddition = additionArr.join(
    `${defaultOptions.additionSeparator}`
  );
  for (let i = 0; i < defaultOptions.repeatTimes; i++) {
    arr.push(str + ("" + repeatedAddition));
  }
  let result = arr.join(defaultOptions.separator);
  return result;
}

module.exports = {
  repeater,
};
