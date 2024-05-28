/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `product`, it is referring to an object. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

// Use a conditional (ternary) operator below.
function checkSize(product, size) {
  return (product.availableSizes.includes(size)) ? "We have that size." : "We do not have that size."
}

module.exports = {
  checkSize,
};
