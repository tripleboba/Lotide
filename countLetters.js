/*
count the appearance of the letter in the string
*/
const countLetters = sentence => {
  if (!sentence) return {};
  const str = sentence.replace(/[^a-zA-Z0-9]/g, "");
  const counter = {};
  for (const letter of str) {
    counter[letter] ? counter[letter] += 1 : counter[letter] = 1;
  }
  return counter;
};
console.log(Object.keys(countLetters("<>&^%@#(")).length);
console.log(countLetters(' '));

module.exports = countLetters;