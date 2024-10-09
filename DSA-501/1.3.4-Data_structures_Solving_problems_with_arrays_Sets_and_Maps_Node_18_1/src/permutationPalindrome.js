/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  const letters = {};
  const uniqueChars = [];
  const wordArray = word.toLowerCase().split("");
  wordArray.forEach((letter) => {
    letters[letter] = (letters[letter] || 0) + 1;
  });
  for (let duplicates in letters) {
    if (letters[duplicates] % 2 !== 0) {
      uniqueChars.push(letters[duplicates]);
    }
  }
  const isPalindrome = uniqueChars.length <= 1;
  return isPalindrome;
}
module.exports = permutationPalindrome;
