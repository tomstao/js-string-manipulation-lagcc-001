'use strict';

var decoder = function(encoded){
  //code your solution here
    const key = 8;
    const result = new Array(encoded.length);

    for (let i = 0; i < encoded.length; i++){
        let char = encoded[i]
        let processedChar = char;
        if(char === '$') {
            processedChar = ' ';
        } else if(typeof char === 'string' && char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            let base;
            if(char === char.toUpperCase()) {
                base = "A".charCodeAt(0);
            } else {
                base = "a".charCodeAt(0);
            }

            let unshiftedCode = (code - base - key + 26) % 26 + base;
            processedChar = String.fromCharCode(unshiftedCode);
        }
            result[encoded.length - 1 - i] = processedChar;
    }
        return result.join("");
};

module.exports = decoder;

