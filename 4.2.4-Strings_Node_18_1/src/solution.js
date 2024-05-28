/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {
  let items = []
  for (let i = 0; i < products.length; i++) {
    items.push(products[i].name)
  }
  if (products.length === 0) {
    return `There are no items for sale.`
  } else if (products.length === 1) {
    return `There is 1 item for sale: ${items[0]}.`
  } else if (products.length === 2) {
    return `There are 2 items for sale: ${items[0]} and ${items[1]}.`
  } else {
    return `There are ${products.length} items for sale: ${items.join(", ")}.`
  }
}

module.exports = {
  listAllItems,
};
