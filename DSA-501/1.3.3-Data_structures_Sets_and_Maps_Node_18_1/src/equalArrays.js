/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const countMap = new Map();
  for (const num of arr1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  for (const num of arr2) {
    if (!countMap.has(num)) {
      return false;
    }
    const count = countMap.get(num);
    if (count === 1) {
      countMap.delete(num);
    } else {
      countMap.set(num, count - 1);
    }
  }
  return countMap.size === 0;
}

module.exports = isEqual;
