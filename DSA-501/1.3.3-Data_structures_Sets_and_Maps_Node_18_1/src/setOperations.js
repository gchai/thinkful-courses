/**
 * return the union of two sets
 */
function union(s1, s2) {
  let newSet = [...s1, ...s2];
  return new Set(newSet);
}
/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  return new Set([...s1].filter((x) => s2.has(x)));
}
/**
 * return the difference of two sets
 */
function difference(setA, setB) {
  const diff = new Set();
  for (const element of setA) {
    if (!setB.has(element)) {
      diff.add(element);
    }
  }
  return diff;
}

module.exports = { union, intersect, difference };
