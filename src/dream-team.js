const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (
    members === null ||
    members === undefined ||
    typeof members[Symbol.iterator] !== "function"
  ) {
    return false;
  }
  let teamName = [];
  for (let name of members) {
    if (typeof name === "string") {
      teamName.push(name.match(/\b\w/i)[0].toUpperCase());
    }
  }
  teamName = teamName.sort().join("");
  return teamName;
}

module.exports = {
  createDreamTeam,
};
