const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = "") {
    // value = "" + value;
    this.chain.push(`( ${value === "" ? "" : value + " "})`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    let start = 0,
      end = this.chain.length - 1;
    while (start < end) {
      let temp = this.chain[start];
      this.chain[start] = this.chain[end];
      this.chain[end] = temp;
      start++;
      end--;
    }
    return this;
  },
  finishChain() {
    let chainStr = this.chain.join("~~");
    this.chain = [];
    return chainStr;
  },
};

module.exports = {
  chainMaker,
};
