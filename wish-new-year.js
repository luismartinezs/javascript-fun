const NEW_YEAR = 2020;

const currentYear = new Date().getFullYear();

const options = {
  specialEvent:
    currentYear === NEW_YEAR ? currentYear : `end of ${currentYear}`,
  goodThings:
    currentYear === NEW_YEAR
      ? ['happy', 'prosperous', 'lovely', 'amazing']
      : ['happy', 'joyful', 'fun', 'crazy'],
  lovelyOnes: ['you all'],
  excitementLevel: 3,
};

const parseItems = (items) => {
  if (!Array.isArray(items) || items.length <= 1) return items;
  let parsedItems = items.map((item, index, arr) => (index === arr.length - 1 ? `and ${item}` : item));
  const itemCount = parsedItems.length;
  parsedItems = parsedItems
    .slice(0, itemCount - 2)
    .concat(parsedItems.slice(-2).join(' '));
  return parsedItems.join(', ');
};

const makeBestWish = ({
  specialEvent = 'holiday',
  goodThings = ['good'],
  lovelyOnes = ['you'],
  excitementLevel = 1,
} = {}) => `I wish ${parseItems(lovelyOnes)} a ${parseItems(
  goodThings,
)} ${specialEvent}${'!'.repeat(excitementLevel)}`;

console.log(makeBestWish(options));

module.exports = makeBestWish;
