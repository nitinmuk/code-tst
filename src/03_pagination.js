const { InvalidFunctionParamError } = require('./error');
const createLogger = require('./logger');

const logger = createLogger('pagination');

const validatePaginationRequest = (pageNumber, itemsPerPage, pageData) => {
  let messages = [];
  let objectToLog = {};
  if(typeof pageNumber !== 'number') {
    messages.push('pageNumber is not a number.');
    objectToLog = {...objectToLog, pageNumber};
  }
  if(typeof itemsPerPage !== 'number') {
    messages.push('itemsPerPage is not a number.');
    objectToLog = {...objectToLog, itemsPerPage};
  }
  if(!Array.isArray(pageData)) {
    messages.push('pageData is not an array.');
    objectToLog = {...objectToLog, pageData};
  }
  if(messages.length) {
    const msg = messages.reduce((previousMessage, currentMessage) => `${previousMessage}${currentMessage}`,'');
    logger.warn(objectToLog, msg);
    throw new InvalidFunctionParamError(msg);
  }
  return;
}

/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution (pageNumber, itemsPerPage, pageData) {
  validatePaginationRequest(pageNumber, itemsPerPage, pageData);
  const startIndex = pageNumber > 0 ? (pageNumber - 1) * itemsPerPage : 0;
  const maxPossibleEndIndex = itemsPerPage > 0 ? startIndex + itemsPerPage - 1 : -1;
  const requestedPage = pageData.filter((value, index) => index >= startIndex && index <= maxPossibleEndIndex);
  return requestedPage.length ? requestedPage : null;
}

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

module.exports = { solution, data };
