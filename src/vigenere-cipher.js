const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') return TROWN;
    let res = '';
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
  
    for (let i = 0; i < message.length; i++) 
    {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90)
      {
        res+= String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(count % key.length)) % 26 + 65);
        count++;
      }
      else
        res+= message[i];
    }
     if (this.type === false)  res = res.split('').reverse().join('');
    return res;

  }    
  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') return TROWN;
   let res = '';
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) 
    {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90)
      {
        res+= String.fromCharCode( (message.charCodeAt(i) + 26 - key.charCodeAt(count % key.length)) % 26 + 65);
        count++;
      }
      else
        res+= message[i];
    }
     if (this.type == false)  res = res.split('').reverse().join('');
    return res;
    
  }
}

module.exports = VigenereCipheringMachine;
