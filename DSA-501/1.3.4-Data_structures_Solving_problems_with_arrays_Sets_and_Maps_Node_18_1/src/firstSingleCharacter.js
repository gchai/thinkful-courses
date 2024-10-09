/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  const count = {};
  const wordArray = word.toLowerCase().split("");
  for (const letter of wordArray) {
    count[letter] = (count[letter] || 0) + 1;
  }
  for (const singleChar in count) {
    if (count[singleChar] === 1) {
      return singleChar;
    }
  }
  return null;
}
module.exports = firstSingleCharacter;
