const { InvalidFunctionParamError } = require("./error");

/**
 * This function returns the values of the input object as an array
 * @param {object} obj
 */
const solution = obj => {
    if(typeof obj !== 'object' || Array.isArray(obj)) {
        throw new InvalidFunctionParamError(`obj: ${obj} is not an object`);
    }
    return Object.values(obj);
};

module.exports = solution
