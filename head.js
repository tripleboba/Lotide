// Function head returns the 1st element of an array
const head = arr => {
  // if (arr.length) return arr[0];
  // else return undefined;

  // refactor
  return arr.length ? arr[0] : undefined;
};

module.exports = head;