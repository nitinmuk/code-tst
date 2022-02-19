const { InvalidFunctionParamError } = require("./error");

/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
    if(typeof str !== 'string') {
        throw new InvalidFunctionParamError(`str: ${str} is not a string`);
    }
    for(let i = 0; i<str.length; i++) {
        const currentChar = str.charAt(i);
        if(str.indexOf(currentChar) === str.lastIndexOf(currentChar)) {
            return currentChar;
        }
    }
  
}

module.exports = solution
