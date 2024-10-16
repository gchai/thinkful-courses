/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

const Stack = require("../stack/stack");

function isPalindrome(text) {
  let cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (cleanText.length === 0) return false;
  const cleanStack = new Stack();
  let mid = Math.floor(cleanText.length / 2);
  if (cleanText.length % 2) {
    cleanText = cleanText.slice(0, mid) + cleanText.slice(mid + 1);
  }
  for (let i = 0; i < cleanText.length; i++) {
    if (i < mid) {
      cleanStack.push(cleanText[i]);
    }
    if (i >= mid) {
      if (cleanStack.pop() !== cleanText[i]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = isPalindrome;
