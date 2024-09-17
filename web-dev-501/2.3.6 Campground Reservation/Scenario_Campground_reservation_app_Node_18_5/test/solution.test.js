const countByView = require("../src/solution");

describe("countByView", () => {
  describe("for the campgrounds list", () => {
    const campgrounds = [
      { number: 1, view: "ocean", partySize: 8, isReserved: false },
      { number: 5, view: "ocean", partySize: 4, isReserved: false },
      { number: 12, view: "ocean", partySize: 4, isReserved: true },
      { number: 18, view: "forest", partySize: 4, isReserved: false },
      { number: 23, view: "forest", partySize: 4, isReserved: true },
    ];

    it("returns ocean views", () => {
      expect(countByView(campgrounds, "ocean")).toEqual(3);
    });

    it("returns forest views", () => {
      expect(countByView(campgrounds, "forest")).toEqual(2);
    });

    it("returns desert views", () => {
      expect(countByView(campgrounds, "desert")).toEqual(0);
    });
  });

  describe("for a larger list", () => {
    const campgrounds = [
      { isReserved: true, number: 133, partySize: 4, view: "forest" },
      { isReserved: true, number: 119, partySize: 12, view: "desert" },
      { isReserved: true, number: 154, partySize: 3, view: "forest" },
      { isReserved: false, number: 67, partySize: 2, view: "desert" },
      { isReserved: false, number: 15, partySize: 12, view: "ocean" },
      { isReserved: true, number: 149, partySize: 12, view: "ocean" },
      { isReserved: false, number: 126, partySize: 4, view: "mountain" },
      { isReserved: false, number: 114, partySize: 12, view: "forest" },
      { isReserved: false, number: 16, partySize: 2, view: "desert" },
      { isReserved: false, number: 192, partySize: 4, view: "mountain" },
      { isReserved: false, number: 77, partySize: 2, view: "desert" },
      { isReserved: false, number: 191, partySize: 12, view: "forest" },
      { isReserved: true, number: 27, partySize: 2, view: "ocean" },
      { isReserved: false, number: 136, partySize: 8, view: "desert" },
      { isReserved: true, number: 195, partySize: 2, view: "forest" },
      { isReserved: false, number: 176, partySize: 8, view: "forest" },
      { isReserved: true, number: 142, partySize: 12, view: "desert" },
      { isReserved: false, number: 15, partySize: 2, view: "ocean" },
      { isReserved: false, number: 5, partySize: 12, view: "desert" },
    ];
    it("returns ocean views", () => {
      expect(countByView(campgrounds, "ocean")).toEqual(4);
    });

    it("returns forest views", () => {
      expect(countByView(campgrounds, "forest")).toEqual(6);
    });

    it("returns desert views", () => {
      expect(countByView(campgrounds, "desert")).toEqual(7);
    });
  });
});
