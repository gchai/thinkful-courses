/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let total = 0;
  for (let i in cart) {
    const item = cart[i]
    const quantity = item.quantity
    const price = item.priceInCents
    total += quantity * price
  } return total
}

function printCartInventory(cart) {
  let string = ""
  for (let name in cart) {
    const item = cart[name]
    const quantity = item.quantity
    string += `${quantity}x${name}\n`
  } return string
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
