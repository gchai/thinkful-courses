const campgroundCapacity = require("../src/solution");

describe("campgroundCapacity", () => {
  it("returns capacity for an empty collection", () => {
    const campground = [];
    expect(campgroundCapacity(campground)).toEqual(0);
  });

  it("returns capacity for smaller collection", () => {
    const campground = [
      { number: 1, view: "ocean", partySize: 8, isReserved: false },
      { number: 5, view: "ocean", partySize: 4, isReserved: false },
      { number: 12, view: "ocean", partySize: 4, isReserved: true },
      { number: 18, view: "forest", partySize: 4, isReserved: false },
      { number: 23, view: "forest", partySize: 4, isReserved: true },
    ];
    expect(campgroundCapacity(campground)).toEqual(24);
  });

  it("returns capacity for a larger list of campgrounds", () => {
    const campground = [
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
    expect(campgroundCapacity(campground)).toEqual(127);
  });
});
