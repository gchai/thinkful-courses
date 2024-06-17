/*
  The following function has various syntax errors. Fix the bugs to get the tests to pass!
*/

function getPriceInDollars(priceInCents = 0,availableSizes) {
  return "$" + (priceInCents / 100).toFixed(2);
}

module.exports = { getPriceInDollars };
