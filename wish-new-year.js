const NEW_YEAR = 2020;

const currentYear = new Date().getFullYear();

const options = {
  specialEvent:
    currentYear === NEW_YEAR ? currentYear : `end of ${currentYear}`,
  goodThings: ['happy', 'joyful', 'wealthy', 'lovely', 'fun', 'crazy'],
  lovelyOnes: ['you all'],
  excitementLevel: 3,
};

const prependAnd = (items) => {
  if (!Array.isArray(items) || items.length <= 1) return items;
  return items.map((item, index, arr) => (index === arr.length - 1 ? `and ${item}` : item));
};

const makeBestWish = ({
  specialEvent = 'holiday',
  goodThings = ['good'],
  lovelyOnes = ['you'],
  excitementLevel = 1,
} = {}) => {
  const parsedGoodThings = prependAnd(goodThings);
  const parsedLovelyOnes = prependAnd(lovelyOnes);

  return `I wish ${parsedLovelyOnes.join(', ')} a ${parsedGoodThings.join(
    ', ',
  )} ${specialEvent}${'!'.repeat(excitementLevel)}`;
};

console.log(makeBestWish(options));
