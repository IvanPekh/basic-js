const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if (date === undefined) return "Unable to determine the time of year!";
if ( Object.prototype.toString.call(date) != '[object Date]') throw new Error('THROWN');

month = (!date) ? null : date.getMonth();

const winter = [11, 0, 1].indexOf(month) !== -1;
const spring = [2, 3, 4].indexOf(month) !== -1;
const summer = [5, 6, 7].indexOf(month) !== -1;
const autumn = [8, 9, 10].indexOf(month) !== -1;

  if (date !== null) {
    return (winter) ? "winter" :
            (spring) ? "spring" :
            (summer) ? "summer" :
            (autumn) ? "autumn" :
            "Unable to determine the time of year!";
  } 
};
