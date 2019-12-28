const makeBestWish = require('./wish-new-year');

test('default output', () => {
  expect(makeBestWish()).toBe('I wish you a good holiday!');
});

test('custom output', () => {
  const options = {
    specialEvent: 'birthday',
    goodThings: ['happy', 'joyful', 'wealthy'],
    lovelyOnes: ['Jane', 'John'],
    excitementLevel: 3,
  };

  expect(makeBestWish(options)).toBe('I wish Jane and John a happy, joyful and wealthy birthday!!!');
});

test('custom output for 2019', () => {
  const NEW_YEAR = 2020;
  const currentYear = 2019;

  const options = {
    specialEvent:
      currentYear === NEW_YEAR ? currentYear : `end of ${currentYear}`,
    goodThings:
      currentYear === NEW_YEAR
        ? ['happy', 'wealthy', 'healthy', 'amazing']
        : ['happy', 'joyful', 'fun', 'crazy'],
    lovelyOnes: ['you all'],
    excitementLevel: 5,
  };

  expect(makeBestWish(options)).toBe('I wish you all a happy, joyful, fun and crazy end of 2019!!!!!');
});

test('custom output for 2020', () => {
  const NEW_YEAR = 2020;
  const currentYear = 2020;

  const options = {
    specialEvent:
      currentYear === NEW_YEAR ? currentYear : `end of ${currentYear}`,
    goodThings:
      currentYear === NEW_YEAR
        ? ['happy', 'wealthy', 'healthy', 'amazing']
        : ['happy', 'joyful', 'fun', 'crazy'],
    lovelyOnes: ['you all'],
    excitementLevel: 5,
  };

  expect(makeBestWish(options)).toBe('I wish you all a happy, wealthy, healthy and amazing 2020!!!!!');
});
