/**
 * Write a function named splitSum1 that implements algorithm 1 here
 */

function splitSum1(tours) {
  const total = tours.reduce((reducer, tour) => reducer + tour);
  let preSum = 0;
  let postSum = total;
  let smallest = Number.MAX_VALUE;

  for (let i = 0; i < tours.length - 1; i++) {
    preSum += tours[i];
    postSum -= tours[i];
    let diff = Math.abs(preSum - postSum);
    if (diff < smallest) smallest = diff;
  }
  return smallest;
}
/**
 * Write a function named splitSum2 that implements algorithm 2 here
 */

function splitSum2(tours) {
  let smallest = Number.MAX_VALUE;
  for (let k = 0; k < tours.length - 1; k++) {
    let preSum = tours.slice(0, k + 1).reduce((reducer, tour) => {
      return tour + reducer;
    }, 0);
    let postSum = tours.slice(k + 1, tours.length).reduce((reducer, tour) => {
      return tour + reducer;
    }, 0);
    const diff = Math.abs(preSum - postSum);
    if (diff < smallest) smallest = diff;
  }
  return smallest;
}

module.exports = { splitSum1, splitSum2 };
