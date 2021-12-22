const letterPositions = sentence => {
  const positions = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    // set key to an obj
    if (positions[letter] === undefined) { // key without value is undefined
      positions[letter] = [];
    }
    positions[letter].push(i);
  }
  return positions;
};

module.exports = letterPositions;

console.log(letterPositions("lighthouse in the house"));