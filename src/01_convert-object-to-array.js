const { InvalidFunctionParamError } = require("./error");
const createLogger = require('./logger');

const logger = createLogger('convert-object-to-array');

/**
 * This function returns the values of the input object as an array
 * @param {object} obj
 */
const solution = obj => {
    if(typeof obj !== 'object' || Array.isArray(obj)) {
        const msg = 'obj is not an object.';
        logger.warn({ obj } , msg);
        throw new InvalidFunctionParamError(msg);
    }
    return Object.values(obj);
};

module.exports = solution;
