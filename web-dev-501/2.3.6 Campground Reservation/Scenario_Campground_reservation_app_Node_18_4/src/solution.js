/**
 * Write a function named `additionalCapacity`
 */

function additionalCapacity(campgrounds){
  let capacity = 0
  campgrounds.forEach(campgrounds =>{
    if (campgrounds.isReserved == false){
      capacity += campgrounds.partySize
    }
  })
  return capacity
}


// Do not make changes below this line
module.exports = additionalCapacity;
