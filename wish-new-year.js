const NEW_YEAR = 2020

const currentYear = new Date().getFullYear()

const options = {
  specialEvent:
    currentYear === NEW_YEAR ? currentYear : `end of ${currentYear}`,
  goodThings: ['happy', 'joyful', 'wealthy', 'lovely', 'fun', 'crazy'],
  lovelyOnes: ['you all'],
  excitementLevel: 3
}

const prependAnd = items => {
  if (!Array.isArray(items) || items.length <= 1) return items
  return items.map((item, index, arr) =>
    index === arr.length - 1 ? `and ${item}` : item
  )
}

const makeBestWish = ({
  specialEvent = 'holiday',
  goodThings = ['good'],
  lovelyOnes = ['you'],
  excitementLevel = 1
} = {}) => {
  const _goodThings = prependAnd(goodThings)
  const _lovelyOnes = prependAnd(lovelyOnes)

  return `I wish ${_lovelyOnes.join(', ')} a ${_goodThings.join(
    ', '
  )} ${specialEvent}${'!'.repeat(excitementLevel)}`
}

console.log(makeBestWish(options))
