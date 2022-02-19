const { InvalidPageNumberError, InvalidFunctionParamError, InvalidItemsPerPageError } = require("./error");

const validatePaginationRequest = (pageNumber, itemsPerPage, pageData) => {
  let msg;
  if(typeof pageNumber !== 'number') {
    msg = `pageNumber: ${pageNumber} is not a number`;
  }
  if(typeof itemsPerPage !== 'number') {
    msg = `itemsPerPage: ${itemsPerPage} is not a number`;
  }
  if(!Array.isArray(pageData)) {
    msg = `pageData: ${pageData} is not an array`;
  }
  if(msg) {
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
]

module.exports = { solution, data }
