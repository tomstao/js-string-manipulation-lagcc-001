'use strict';

var encoder = function(phrase){
  //code your solution here
    const key = 8;

    const reverse = new Array(phrase.length);
    for(let i = 0; i < phrase.length; i++){
        let char = phrase[i];
        let processedChar = char;
        if(char === ' ') {
            reverse[phrase.length - 1 - i] = '$'
            continue;
        }
        if(typeof char === 'string' && char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            let base;

            if(char === char.toUpperCase()) {
                base = "A".charCodeAt(0);
            } else {
                base = "a".charCodeAt(0);
            }

            let shiftCode = (code - base + key + 26) % 26 + base;
            processedChar = String.fromCharCode(shiftCode);
        }
        reverse[phrase.length - 1 - i] = processedChar;

    }

    return reverse.join('');

};

module.exports = encoder;
