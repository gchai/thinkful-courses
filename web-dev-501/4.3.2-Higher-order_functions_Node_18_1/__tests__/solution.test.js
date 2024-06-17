const {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
} = require("../src/solution");

describe("printNames", () => {
  const names = [
    "Mark Fisher",
    "Ira Bennett",
    "Denise Hicks",
    "Julius Patterson",
    "Pete Barrett",
    "Lionel Jensen",
    "Percy Martinez",
    "Robert Clarke",
    "Rickey Fox",
  ];

  it("logs each name with console.log", () => {
    const spy = jest.spyOn(console, 'log').mockImplementation()
    printNames(names);
    names.forEach((name) => expect(console.log).toBeCalledWith(name));
  });

  it("uses forEach", () => {
    const spy = jest.spyOn(names, 'forEach').mockImplementation()
    printNames(names);
    expect(names.forEach).toHaveBeenCalled();
  });
});

describe("logTreeType", () => {
  const trees = [
    {
      type: "oak",
      height: "30m",
    },
    {
      type: "elm",
      height: "21m",
    },
    {
      type: "hickory",
      height: "11m",
    },
    {
      type: "maple",
      height: "14m",
    },
  ];

  it("logs each tree type with console.log", () => {
    const spy = jest.spyOn(console, 'log').mockImplementation()
    logTreeType(trees);
    trees.forEach(({ type }) => expect(console.log).toBeCalledWith(type));
  });

  it("uses forEach", () => {
    const spy = jest.spyOn(trees, 'forEach').mockImplementation()
    logTreeType(trees);
    expect(trees.forEach).toHaveBeenCalled();
  });
});

describe("totalPoints", () => {
  const points = [6, 7, 1, 3, 1, 17, 4, 12, 1, 5, 0, 13, 15];

  it("returns the total points", () => {
    expect(totalPoints(points)).toEqual(85);
  });

  it("uses forEach", () => {
    const spy = jest.spyOn(points, 'forEach').mockImplementation()
    totalPoints(points);
    expect(points.forEach).toHaveBeenCalled();
  });
});

describe("buildSentence", () => {
  const words = [
    "I'm",
    "looking",
    "for",
    "the",
    "man",
    "who",
    "shot",
    "my",
    "paw",
  ];

  it("returns the full sentence", () => {
    expect(buildSentence(words)).toEqual(
      "I'm looking for the man who shot my paw "
    );
  });

  it("uses forEach", () => {
    const spy = jest.spyOn(words, 'forEach').mockImplementation()
    buildSentence(words);
    expect(words.forEach).toHaveBeenCalled();
  });
});

describe("logPercentages", () => {
  const decimals = [0.75, 0.91, 0.48, 0.23, 0.99, 0.83, 1.1];

  it("logs the percentages", () => {
    const spy = jest.spyOn(console, 'log').mockImplementation()
    logPercentages(decimals);
    decimals.forEach((d) => expect(console.log).toBeCalledWith(`${d * 100}%`));
  });

  it("uses forEach", () => {
    const spy = jest.spyOn(decimals, 'forEach').mockImplementation()
    logPercentages(decimals);
    expect(decimals.forEach).toHaveBeenCalled();
  });
});

