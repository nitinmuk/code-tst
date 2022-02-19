const { solution, data } = require('./03_pagination')
const { InvalidItemsPerPageError, InvalidFunctionParamError } = require('./error')

test('Test 1 - page 1, 5 items per page', () => {
  // Arrange
  const expected = ['a', 'b', 'c', 'd', 'e']

  // Act
  const actual = solution(1, 5, data)

  // Assert
  expect(actual).toEqual(expected)
})

test('Test 2 - page 2, 10 items per page', () => {
  // Arrange
  const expected = ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't']

  // Act
  const actual = solution(2, 10, data)

  // Assert
  expect(actual).toEqual(expected)
})

test('Test 3 - page 3, 10 items per page', () => {
  // Arrange
  const expected = ['u', 'v', 'w', 'x', 'y', 'z']
  // Act
  const actual = solution(3, 10, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 4 - page 9, 3 items per page', () => {
  // Arrange
  const expected = ['y', 'z']
  // Act
  const actual = solution(9, 3, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 5 - page 2, 25 items per page', () => {
  // Arrange
  const expected = ['z']
  // Act
  const actual = solution(2, 25, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 6 - page 4, 10 items per page', () => {
  // Arrange
  const expected = null
  // Act
  const actual = solution(4, 10, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 7 - page 0, 5 items per page', () => {
  // Arrange
  const expected = ['a', 'b', 'c', 'd', 'e']
  // Act
  const actual = solution(0, 5, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 8 - page -1, 5 items per page', () => {
  // Arrange
  const expected = ['a', 'b', 'c', 'd', 'e']
  // Act
  const actual = solution(-1, 5, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 9 - page 1, 0 items per page', () => {
  // Arrange
  const expected = null;
  // Act
  const actual = solution(1, 0, data);
  // Assert
  expect(actual).toEqual(expected);

});

test('Test 10 - page 2, -1 items per page', () => {
  // Arrange
  const expected = null;
  // Act
  const actual = solution(2, -1, data);
  // Assert
  expect(actual).toEqual(expected);

});

const commonInvalidValues = [null, undefined, '1', {}, ''];

test('Test 11 - throws InvalidFunctionParamError when itemsPerPage is invalid type', () => {
  // Arrange
  const expected = InvalidFunctionParamError;
  // Act
  let actual;
  const invalidItemsPerPage = [...commonInvalidValues, []];
    invalidItemsPerPage.forEach(invalidItemPerPage => {
      try {
        solution(1, invalidItemPerPage, data);
      } catch(error) {
        actual = error;
      }
      // Assert
      expect(actual).toBeInstanceOf(expected);
      actual = undefined;
    })
});

test('Test 12 - throws InvalidFunctionParamError when pageNumber is invalid type', () => {
  // Arrange
  const expected = InvalidFunctionParamError;
  const invalidPageNumbers = [...commonInvalidValues, []];
  // Act
  let actual;
  invalidPageNumbers.forEach(invalidPageNumber => {
      try {
        solution(invalidPageNumber, 1, data);
      } catch(error) {
        actual = error;
      }
      // Assert
      expect(actual).toBeInstanceOf(expected);
      actual = undefined;
    })
});

test('Test 13 - throws InvalidFunctionParamError when data is invalid type', () => {
  // Arrange
  const expected = InvalidFunctionParamError;
  // Act
  let actual;
  const invalidDataValues = [...commonInvalidValues, 1];
  invalidDataValues.forEach(invalidDataValue => {
      try {
        solution(1, 1, invalidDataValue);
      } catch(error) {
        actual = error;
      }
      // Assert
      expect(actual).toBeInstanceOf(expected);
      actual = undefined;
    })
});
