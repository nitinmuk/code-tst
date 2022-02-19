const solution = require('./01_convert-object-to-array')
const { InvalidFunctionParamError } = require('./error')

const generateData = () => {
  const expected = []
  const input = {}

  for (let index = 0; index < 100; index++) {
    const val = Math.random()
    input[`prop_${index}`] = val
    expected.push(val)
  }

  return { input, expected }
}

test('should convert an object into array of values', () => {
  // Arrange
  const input = { foo: 123, bar: 456, baz: 789 }
  const expected = [123, 456, 789]

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).toEqual(expected)
})

test('should convert a dynamically created object to array', () => {
  // Arrange
  const { input, expected } = generateData()

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).toEqual(expected)
})

test('should convert an empty object into an empty array', () => {
  // Arrange
  const input = {};
  const expected = [];

  // Act
  const actual = solution(input);

  // Assert
  expect(actual).toEqual(expected);
});

test('should throw InvalidFunctionParamError when function param is invalid type', () => {
  // Arrange
  const invalidParamValues = ['', 1, [], '!@34ed'];
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

