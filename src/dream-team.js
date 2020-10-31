const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members instanceof Array) {
    return members.map(name => (typeof name === 'string') ? name.trim()[0].toUpperCase() : "").sort().join('');
  } else {
      return false;
  }
};
