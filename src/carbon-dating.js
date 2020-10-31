const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  
  if (typeof sampleActivity === 'string' && age > 0 && !isNaN(age) && age !== Infinity) { 
    return age;
  }else {
    return false;
  }
};
