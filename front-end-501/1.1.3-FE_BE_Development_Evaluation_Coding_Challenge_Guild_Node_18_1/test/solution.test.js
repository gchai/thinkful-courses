const { expect } = require("chai");
const {
  chooseItemByNameAndFormat,
  calculateTotal,
  printReceipt,
} = require("../src/solution");

describe("Solution", () => {
  let albums = [
    {
      name: "My Favorite Things",
      author: "John Coltrane",
      priceInCents: 800,
      availableFormats: ["CD", "Vinyl", "Cassette"],
    },
    {
      name: "Spectrum",
      author: "Hiromi",
      priceInCents: 700,
      availableFormats: ["CD", "Vinyl", "DVD"],
    },
    {
      name: "Maschine Dreams",
      author: "Little Dragon",
      priceInCents: 900,
      availableFormats: ["CD", "Vinyl"],
    },
  ];

  describe("#chooseItemByNameAndFormat()", () => {
    it("should return null if an album cannot be found by name", () => {
      const actual = chooseItemByNameAndFormat(albums, "Pink Shorts", "CD");
      expect(actual).to.be.null;
    });
    it("should return null if a album cannot be found by format", () => {
      const actual = chooseItemByNameAndFormat(albums, "My Favorite Things", "DVD");
      expect(actual).to.be.null;
    });
    it("should return the album if it can be found by name and format", () => {
      const actual = chooseItemByNameAndFormat(albums, "My Favorite Things", "CD");
      expect(actual).to.eql(albums[0]);
    });
  });


  describe("#calculateTotal()", () => {
    it("should return 0 if the given cart is empty", () => {
      const actual = calculateTotal({});
      const expected = 0;
      expect(actual).to.equal(expected);
    });
    it("should return a total for the cart, in cents", () => {
      const cart = {
        "My Favorite Things": {
          priceInCents: 800,
          quantity: 1,
        },
        "Spectrum": {
          priceInCents: 700,
          quantity: 2,
        },
      };
      const actual = calculateTotal(cart);
      const expected = 2200;
      expect(actual).to.equal(expected);
    });
  });

  describe("#printReceipt()", () => {
    it("should return null if the cart is empty", () => {
      const actual = printReceipt({});
      expect(actual).to.be.null;
    });
    it("should return a receipt of all items in the cart", () => {
      const cart = {
        "My Favorite Things": {
          priceInCents: 800,
          quantity: 1,
        },
        "Spectrum": {
          priceInCents: 700,
          quantity: 2,
        },
      };
      const actual = printReceipt(cart);
      const expected = `1x My Favorite Things - $8.00\n2x Spectrum - $14.00\nTotal: $22.00`;
      expect(actual).to.equal(expected);
    });
  });
});
