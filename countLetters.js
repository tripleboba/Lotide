/*
count the appearance of the letter in the string
*/
const countLetters = sentence => {
  const str = sentence.replace(/[^a-zA-Z0-9]/g, "");
  const counter = {};
  for (const letter of str) {
    counter[letter] ? counter[letter] += 1 : (counter[letter]) = 1;
  }
  return counter;
};

module.exports = countLetters;