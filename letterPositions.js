const letterPositions = sentence => {
  if (!sentence) return {};
  const positions = {};
  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];    
    // refactor
    // existing letter position ? yes: push new one | no: create an array to store that index
    positions[letter] ? positions[letter].push(index) : positions[letter] = [index];

    // set key to an obj
    // if (positions[letter] === undefined) { // key without value is undefined
    //   positions[letter] = [];
    // }
    // positions[letter].push(index);
  }
  return positions;
};
module.exports = letterPositions;