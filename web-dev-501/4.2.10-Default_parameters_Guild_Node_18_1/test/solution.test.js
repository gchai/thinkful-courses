const { expect } = require("chai");
const {
  getPriceInDollars,
  checkIfSizeIsAvailable,
  getProductHeading,
} = require("../src/solution");

describe("Solution", () => {

  describe("#getPriceInDollars()", () => {
    it("should convert the price in cents to a string price in dollars", () => {
      const actual = getPriceInDollars(9800);
      expect(actual).to.equal("$98.00");
    });
    it("should default to 0 if no product is provided", () => {
      const actual = getPriceInDollars();
      expect(actual).to.equal("$0.00");
    });
  });

});

describe("Implementation", () => {
  describe("#getPriceInDollars()", () => {
    it("should destructure `priceInCents`", () => {
      const content = getPriceInDollars.toString();
      expect(content).not.to.include(".priceInCents");
    });
  });
});
