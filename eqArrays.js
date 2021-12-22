// implement eqArrays function for checking arrays - return true/false
const eqArrays = (arr1, arr2) => {
  // initially check if 2 arrs have the same number of elements
  if (arr1.length !== arr2.length) return false;
  
  // deep check the value of elements
  //  - elements in 2 arrs need to be in the same order
  //  - not support array elements (nested array)
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

module.exports = eqArrays;