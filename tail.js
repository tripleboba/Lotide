// EVERY ELEMENTS AFTER THE HEAD - not just the last one
const tail = arr => {
  if (!arr.length) return undefined;
  else {
    const result = [];
    for (let i = 1; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
  }
};

module.exports = tail;
