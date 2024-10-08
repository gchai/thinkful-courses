function indexOf(compare, sortedElements) {
  if (Array.isArray(sortedElements)) {
    let lowerIndex = 0;
    let upperIndex = sortedElements.length - 1;
    while (lowerIndex <= upperIndex) {
      const index = Math.floor((upperIndex + lowerIndex) / 2);
      const compared = compare(sortedElements[index], index, sortedElements);
      if (compared > 0) {
        lowerIndex = index + 1;
      }
      if (compared === 0) {
        return index;
      }
      if (compared < 0) {
        upperIndex = index - 1;
      }
    }
  }
  return -1;
}

module.exports = indexOf;
