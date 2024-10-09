/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  const sortedS1 = Array.from(s1.split("")).sort().join("");
  const sortedS2 = Array.from(s2.split("")).sort().join("");

  if (sortedS1.toLowerCase() === sortedS2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
module.exports = anagram;
