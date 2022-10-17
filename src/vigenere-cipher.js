const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(state) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.matrix = [];
    this.state = "" + state;
  }
  //create matrix of letters to reference
  createMatrix() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let line = this.alphabet.slice(i);
      line += this.alphabet.slice(0, i);
      this.matrix.push(line.split(""));
    }
  }
  getMatrix() {
    this.createMatrix();
    return this.matrix;
  }
  encrypt(message, key) {
    //check
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    this.createMatrix();
    message.toUpperCase();
    key.toUpperCase();
    let encryptedMessage = "";
    let repeatedKey = key
      .repeat(Math.ceil(message.length / key.length))
      .slice(0, message.length);
    let keyIndex = 0;
    for (let k = 0; k < message.length; k++) {
      let a = this.alphabet.indexOf(message[k].toUpperCase());
      let b = this.alphabet.indexOf(repeatedKey[keyIndex].toUpperCase());
      if (a === -1) {
        encryptedMessage += message[k];
      } else {
        encryptedMessage += this.matrix[a][b];
        keyIndex++;
      }
    }
    if (this.state === "false") {
      encryptedMessage = encryptedMessage.split("").reverse().join("");
    }
    return encryptedMessage;
  }
  decrypt(encryptedMessage, key) {
    //check
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    this.createMatrix();
    let decryptedMessage = "";
    let repeatedKey = key
      .repeat(Math.ceil(encryptedMessage.length / key.length))
      .slice(0, encryptedMessage.length);
    let keyIndex = 0;
    for (let k = 0; k < encryptedMessage.length; k++) {
      let a = this.alphabet.indexOf(repeatedKey[keyIndex].toUpperCase());
      let b = this.matrix[a].indexOf(encryptedMessage[k].toUpperCase());
      console.log(a);
      console.log(b);
      console.log(decryptedMessage);
      if (b === -1) {
        decryptedMessage += encryptedMessage[k];
      } else {
        decryptedMessage += this.alphabet[b];
        keyIndex++;
      }
    }
    if (this.state === "false") {
      decryptedMessage = decryptedMessage.split("").reverse().join("");
    }
    return decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
