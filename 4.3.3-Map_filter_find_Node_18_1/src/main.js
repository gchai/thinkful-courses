/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function findParkByName(parks, name) {
    let foundPark = parks.find((park) => park.name === name);
    return foundPark;
}

function getBigParkNames(parks, minSize) {
    let bigParks = parks.filter((park) => park.areaInSquareKm >= minSize);
    let result = bigParks.map((park) => park.name);
    return result;
}
module.exports = {
    findParkByName,
    getBigParkNames,
};