// Implement without which will return a subset of a given array, removing unwanted elements.
const without = (sourceArray, removeElements) => {
  return sourceArray.filter(i => !removeElements.includes(i));
};

module.exports = without;