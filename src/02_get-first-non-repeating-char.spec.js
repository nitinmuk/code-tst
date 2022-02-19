const solution = require('./02_get-first-non-repeating-char')
const { InvalidFunctionParamError } = require('./error')

test('Test 1 - "this is the string"', () => {
  expect(solution('this is the string')).toBe('e')
})

test('Test 2 - "persuit is a good place to work"', () => {
  expect(solution('persuit is a good place to work')).toBe('u')
})

test('Test 3 - should throw InvalidFunctionParamError when function param is not string', () => {
  // Arrange
  const invalidParamValues = [1, [], {}];
  const expected = InvalidFunctionParamError;
  // Act
  let actual;
  invalidParamValues.forEach(invalidParamValue => {
      try {
        solution(invalidParamValue);
      } catch(error) {
        actual = error;
      }
      // Assert
      expect(actual).toBeInstanceOf(expected);
      actual = undefined;
    })
});

test('Test 4 - empty string should return undefined', () => {
  expect(solution('')).toBeUndefined();
});

test('Test 5 - "a" should return a', () => {
  expect(solution('a')).toBe('a');
});

test('Test 6 - "a:ab" should return :', () => {
  expect(solution('a:ab')).toBe(':');
});
