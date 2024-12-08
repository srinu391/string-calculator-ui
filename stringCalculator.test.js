const stringCalculator = require('./stringCalculator');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(stringCalculator("")).toBe(0);
  });

  test('returns the number for a single number string', () => {
    expect(stringCalculator("5")).toBe(5);
  });

});
