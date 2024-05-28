const findMyCampsites = require("../src/solution");

describe("findMyCampsites", () => {
  describe("for the sample campgrounds", () => {
    const campground = [
      { number: 1, view: "ocean", partySize: 8, isReserved: false },
      { number: 5, view: "ocean", partySize: 4, isReserved: false },
      { number: 12, view: "ocean", partySize: 4, isReserved: true },
      { number: 18, view: "forest", partySize: 4, isReserved: false },
      { number: 23, view: "forest", partySize: 4, isReserved: true },
    ];
    it("returns ocean views for party of 4", () => {
      expect(findMyCampsites(campground, "ocean", 4)).toEqual([1, 5]);
    });

    it("returns 'Sorry...' when no sites available", () => {
      expect(findMyCampsites(campground, "desert", 2)).toEqual(
        "Sorry, no campsites with that view are available to host your party"
      );
    });

    it("returns forest views for party of 3", () => {
      expect(findMyCampsites(campground, "forest", 3)).toEqual([18]);
    });
  });

  describe("for a larger list of campgrounds", () => {
    const campground = [
      { isReserved: true, number: 133, partySize: 4, view: "forest" },
      { isReserved: true, number: 119, partySize: 12, view: "desert" },
      { isReserved: true, number: 154, partySize: 3, view: "forest" },
      { isReserved: false, number: 67, partySize: 2, view: "desert" },
      { isReserved: false, number: 15, partySize: 12, view: "ocean" },
      { isReserved: true, number: 149, partySize: 12, view: "ocean" },
      { isReserved: false, number: 119, partySize: 4, view: "mountain" },
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

    it("returns ocean views for party of 4", () => {
      expect(findMyCampsites(campground, "ocean", 4)).toEqual([15]);
    });

    it("returns 'Sorry...' when no sites available", () => {
      expect(findMyCampsites(campground, "forest", 20)).toEqual(
        "Sorry, no campsites with that view are available to host your party"
      );
    });

    it("returns desert views for party of 12", () => {
      expect(findMyCampsites(campground, "desert", 12)).toEqual([5]);
    });
  });
});
