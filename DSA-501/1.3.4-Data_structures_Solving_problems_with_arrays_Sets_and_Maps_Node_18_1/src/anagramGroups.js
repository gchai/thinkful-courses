/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  const results = new Map();
  words.forEach((word) => {
    const sorted = word.toLowerCase().split("").sort().join("");
    const anagrams = results.get(sorted) || [];
    anagrams.push(word);
    results.set(sorted, anagrams);
  });
  return Array.from(results.values());
}
module.exports = anagramGroups;
