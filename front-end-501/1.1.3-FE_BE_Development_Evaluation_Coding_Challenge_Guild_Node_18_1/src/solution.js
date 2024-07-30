/*
  When any of the following function's parameters reference `albums`, they are referencing an array full of objects with the following shape:
   {
     name: "My Favorite Things",
     priceInCents: 800,
     availableFormats: ["CD","Cassette","Vinyl"]
   }   
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndFormat(albums, name, format) {
  // TODO: Write your solution here.
  album = albums.find(album => album.name === name && album.availableFormats.includes(format));
  if (album == undefined){
    album = null
  }
  return album
}

function calculateTotal(cart) {
 // TODO: Write your solution here
 // Hint: To loop through the properties of the `cart` object, you can use the for...in syntax
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 let total = 0;
 for (let album in cart) {
  const { quantity, priceInCents } = cart[album];
  total += quantity * priceInCents;
 }
 return total;
}

// TODO: Fix the function below so that it passes the tests.
function printReceipt(cart) {
  const total = calculateTotal(cart);
  if (!total) return null;

  let result = "";
  for (let name in cart) {
    const { quantity, priceInCents } = cart[name];
    const amount = (priceInCents * quantity).toFixed(2);
    result += `${quantity}x ${name} - ${printablePrice(amount)}\n`;
  }
  return result.trimEnd() + `\nTotal: ${printablePrice(total)}`;
}

module.exports = {
  chooseItemByNameAndFormat,
  calculateTotal,
  printReceipt,
};
