const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (
    Object.getOwnPropertyNames(date).length !== 0 ||
    !date instanceof Date ||
    Object.prototype.toString.call(date) !== "[object Date]"
  ) {
    throw new Error("Invalid date!");
  }
  let season;
  switch (date.getMonth()) {
    case 11:
    case 0:
    case 1:
      season = "winter";
      break;
    case 2:
    case 3:
    case 4:
      season = "spring";
      break;
    case 5:
    case 6:
    case 7:
      season = "summer";
      break;
    case 8:
    case 9:
    case 10:
      season = "fall";
      break;
  }
  return season;
}

module.exports = {
  getSeason,
};
