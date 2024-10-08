/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */
function sort(compare, elements) {
  if (Array.isArray(elements)) {
    let sorted;
    do {
      sorted = true;
      for (let i = 0; i < elements.length - 1; i++) {
        const left = elements[i];
        const right = elements[i + 1];
        if (compare(left, right) > 0) {
          elements[i] = right;
          elements[i + 1] = left;
          sorted = false;
        }
      }
    } while (sorted === false);
  }
  return elements;
}

module.exports = sort;
