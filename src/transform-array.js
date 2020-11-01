const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = arr.slice(0); 
  
  if (result instanceof Array) {
    
    arr.forEach(function (item, i) {
      if (item === '--discard-next') {
        i = result.indexOf("--discard-next");
        result = (result[i+1] === undefined) ? result.slice(0, i).concat(result.slice(i+1)) : result.slice(0, i).concat(result.slice(i+2)); 
    }
    if (item === '--discard-prev') {
        i = result.indexOf("--discard-prev");
        result = (result[i-1] === undefined || arr.includes("--discard-next")) ? result.slice(0, i).concat(result.slice(i+1)) : result.slice(0, i-1).concat(result.slice(i+1));
        ;
    }
    if (item === '--double-next') {
        i = result.indexOf("--double-next");
        result = (result[i+1] === undefined) ? result.slice(0, i).concat(result.slice(i+1)) : result.slice(0, i).concat(result[i+1]).concat(result.slice(i+1));
    } 
    if (item === '--double-prev') {
      i = result.indexOf("--double-prev");
      result = (result[i-1] === undefined || arr.includes("--discard-next")) ? result.slice(0, i).concat(result.slice(i+1)) : result.slice(0, i).concat(result[i-1]).concat(result.slice(i+1));
    }
    });

} else {
  throw new Error("Error");
}  

return result;
};
