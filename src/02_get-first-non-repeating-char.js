const { InvalidFunctionParamError } = require('./error');
const createLogger = require('./logger');

const logger = createLogger('get-first-non-repeating-chars');

/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
    if(typeof str !== 'string') {
        const msg = 'str is not a string.';
        logger.warn({ str }, msg);
        throw new InvalidFunctionParamError(msg);
    }
    for(let i = 0; i<str.length; i++) {
        const currentChar = str.charAt(i);
        if(str.indexOf(currentChar) === str.lastIndexOf(currentChar)) {
            return currentChar;
        }
    }
    return null;
  
}

module.exports = solution
