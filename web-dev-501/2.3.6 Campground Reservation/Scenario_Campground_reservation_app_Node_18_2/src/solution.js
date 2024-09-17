/**
 * Write a function named `campgroundCapacity`.
 */

function campgroundCapacity(campsite){
  let capacity = 0
  campsite.forEach(campsite => {
    capacity += campsite.partySize})
  return capacity
}

// Do not make changes below this line.

module.exports = campgroundCapacity;
