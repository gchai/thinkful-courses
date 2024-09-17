/**
 * Write a function named `availableCampsites`.
 */

function availableCampsites(campgrounds){
  let available = []
  campgrounds.forEach(campgrounds =>{
    if (campgrounds.isReserved == false){
      available.push(campgrounds.number)
    }
  })
  return available
}

// Do not make changes below this line.
module.exports = availableCampsites;
