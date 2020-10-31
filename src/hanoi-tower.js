const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let minTurns = Math.pow(2,disksNumber) -1;
let minSeconds = Math.floor(minTurns * 3600 / turnsSpeed);
return {turns: minTurns, seconds: minSeconds};
};
