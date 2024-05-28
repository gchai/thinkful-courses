/**
 * Write a function named `countByView`.
 */

function countByView(campgrounds, view){
  let count = 0
  campgrounds.forEach(campgrounds =>{
    if (campgrounds.view == view){
      count += 1
    }
  })
  return count
}

// Do not make changes below this line.
module.exports = countByView;
