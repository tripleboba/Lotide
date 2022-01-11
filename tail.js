// EVERY ELEMENTS AFTER THE HEAD - not just the last one
const tail = arr => {
  // if (!arr.length) return undefined;
  // else {
  //   const result = [];
  //   for (let i = 1; i < arr.length; i++) {
  //     result.push(arr[i]);
  //   }
  //   return result;
  // }

  // refactor shorter code
  return arr.length ? arr.slice(1) : undefined;
};

module.exports = tail;
