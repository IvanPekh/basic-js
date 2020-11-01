const CustomError = require("../extensions/custom-error");

const chainMaker = {
  elements : [],
  string: "",
  
  getLength() {
    return this.elements.length;
  },
  
  addLink(value) {
    this.elements.push((value === undefined) ? `( '( )' )` : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position === parseInt(position, 10) && (position ^ 0) === position) {
       this.elements.splice(position-1, 1);
    } else {
      this.elements = [];
       throw new Error("Error");
    }
    return this;
  },
  reverseChain() {
    this.elements.reverse();
    return this;
  },
  finishChain() {
     if (!this.elements.length) {
      throw new Error("Error");
     } else {
       this.string = this.elements.join("~~");
       this.elements.length = 0;
       return this.string;
     }
  }
};

module.exports = chainMaker;
