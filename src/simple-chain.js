const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (this.arr[position-1])
    {
      this.arr.splice(position-1,1);
      return this;
    }
    else
    {
      this.arr = [];
      return THROWN;

    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let arr_copy = this.arr.join('~~');
    this.arr = [];
    return arr_copy;
  }
};


module.exports = chainMaker;
