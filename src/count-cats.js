const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let count = 0;
  let cats = [];

  array.forEach(function(item, i, array) {
    let ears = item.indexOf('^^');

    while (ears !== -1) {
      cats.push(ears);
      ears = item.indexOf('^^', ears + 1);
    }
   
   count = cats.length;
   });

return count = (count === 0 ) ? 0 : count;
};
