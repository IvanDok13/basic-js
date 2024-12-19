const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(mod = true) {
    this.mod = mod;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let arrMessage = message.toUpperCase().split('');
    console.log(arrMessage);
    let arrKey = key.toUpperCase().split('');
    let res = [];
    let keyIndex = 0;
    arrMessage.map(item => {
      if (!this.alphabet.includes(item)) {
        res.push(item);
      } else {
        const charIndex = this.alphabet.indexOf(item);
        const keyCharIndex = this.alphabet.indexOf(arrKey[keyIndex % arrKey.length]);
        const encryptedCharIndex = (charIndex + keyCharIndex) % this.alphabet.length;

        res.push(this.alphabet[encryptedCharIndex]);
        keyIndex++;
      }
    });
    return this.mod ? res.join('') : res.reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let arrMessage = message.toUpperCase().split('');
    let arrKey = key.toUpperCase().split('');
    let res = [];
    let keyIndex = 0;
    arrMessage.map(item => {
      if (!this.alphabet.includes(item)) {
        res.push(item);
      } else {
        const charIndex = this.alphabet.indexOf(item);
        const keyCharIndex = this.alphabet.indexOf(arrKey[keyIndex % arrKey.length]);
        const decryptedCharIndex = (charIndex - keyCharIndex + this.alphabet.length) % this.alphabet.length;
        res.push(this.alphabet[decryptedCharIndex]);
        keyIndex++;
      }
    });
    return this.mod ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
