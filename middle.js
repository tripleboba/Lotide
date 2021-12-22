/**
* return [] if arr has < 3 elements
* return an [] of 2 middle-most elements if arr has even elements
* return an [] of 1 middle-most elements if arr has odd elements
*/
const middle = arr => {
  let mid = [];
  // check size of []
  if (arr.length < 3) return mid;
  // odd []
  else if (arr.length % 2 !== 0) {
    mid.push(arr[Math.floor(arr.length / 2)]);
    return mid;
  }
  // even []
  else if (arr.length % 2 === 0) {
    mid.push(arr[(arr.length / 2) - 1]); // the 1st middle value
    mid.push(arr[arr.length / 2]);  // the 2nd middle value
    return mid;
  }
};

module.exports = middle;