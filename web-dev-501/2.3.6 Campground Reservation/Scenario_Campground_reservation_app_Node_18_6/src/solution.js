/**
 * Write a function named `findMyCampsites`.
 */

function findMyCampsites(campgrounds, view, partySize){
  let available = []
  campgrounds.forEach(campgrounds =>{
    if (campgrounds.isReserved == false){
      if (campgrounds.partySize >= partySize){
        if (campgrounds.view == view){
          available.push(campgrounds.number)
        }
      }
    }
  })
  if (available.length == 0){
    return "Sorry, no campsites with that view are available to host your party"
  } else {
    return available
  }

}

// Do not make changes below this line.
module.exports = findMyCampsites;
