const { expect } = require("chai");
const { checkSize, newYorkCitySalesPrice } = require("../src/solution");

describe("Solution Functions", () => {
  let product = {
    name: "Light Grey Chino Skinny Shorts",
    priceInCents: 1999,
    availableSizes: [28, 30, 32, 34, 38],
  };
  describe("#checkSize()", () => {
    it('should return "We have that size." if the given size is available', () => {
      const actual = checkSize(product, 30);
      expect(actual).to.equal("We have that size.");
    });
    it('should return "We do not have that size." if the given size is not available', () => {
      const actual = checkSize(product, 36);
      expect(actual).to.equal("We do not have that size.");
    });
  });
});

describe("Solution Implementation", () => {
  describe("#checkSize()", () => {
    it("should use the conditional (ternary) operator", () => {
      expect(checkSize.toString().includes("?")).to.be.true;
    });
  });
});
