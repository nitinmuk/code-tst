/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution (pageNumber, itemsPerPage, pageData) {
  if(typeof pageNumber === 'number' && 
     typeof itemsPerPage === 'number' && Array.isArray(pageData)); 
  {
  const startIndex = pageNumber > 0 ? (pageNumber - 1) * itemsPerPage : 0;
  const maxPossibleEndIndex = startIndex + itemsPerPage - 1;
  const requestedPage = pageData.filter((value, index) => index >= startIndex && index <= maxPossibleEndIndex);
  return requestedPage.length ? requestedPage : null;
  }

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
