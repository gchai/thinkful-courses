const {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength
} = require("../src/solution");


describe("sortWords", () => {
  let abc = ['c', 'a', 'b'];
  let words = [
      'mug',    'curl',
      'hole',   'appliance',
      'unused', 'spark',
      'polite', 'manage',
      'stir',   'stroke',
      'versed', 'tight'
    ];
  
  it("correctly sorts ['c','a','b']", () => {
    expect(sortWords(abc.slice())).toEqual(['a', 'b', 'c']);
  });
  
  it("correctly sorts longer array of words", () => {
    let sorted = words.slice().sort();
    expect(sortWords(words.slice())).toEqual(sorted);
  });
  
  it("uses sort", () => {
    let arr = abc.slice()
    const spy = jest.spyOn(arr, 'sort').mockImplementation()
    sortWords(arr)
    expect(arr.sort).toHaveBeenCalled();
  })
});

describe("sortNumbers", () => {
  it("correctly sorts  [3,1,2]", () => {
    expect(sortNumbers([3,1,2])).toEqual([1,2,3])
  });

  it("sorts short list of numbers", () => {
    expect(sortNumbers([56, -2, 3, 102])).toEqual([-2, 3, 56, 102])
  });

  it("uses sort", () => {
    let arr = [56, -2, 3, 102]
    const spy = jest.spyOn(arr, 'sort').mockImplementation()
    sortNumbers(arr)
    expect(arr.sort).toHaveBeenCalled();
  });
});

describe("largestFirst", () => {
  it("correctly sorts  [3,1,2]", () => {
    expect(largestFirst([3,1,2])).toEqual([3,2,1])
  });

  it("sorts short list of numbers", () => {
    expect(largestFirst([56, -2, 3, 102])).toEqual([102, 56, 3, -2])
  });
  
  it("uses sort", () => {
    let arr = [56, -2, 3, 102];
    const spy = jest.spyOn(arr, 'sort').mockImplementation();
    largestFirst(arr);
    expect(arr.sort).toHaveBeenCalled();
  });
});

describe("sortFlowersByZone", () => {
  let flowers = [
    {
      name: "Pink Coneflower",
      zone: 6
    },
    {
      name: "Scarlet Phlox",
      zone: 2
    },
    {
      name: "Carnations",
      zone: 4
    },
    {
      name: "Hyacinths",
      zone: 3
    },
    {
      name: "Hydrangeas",
      zone: 5
    }
  ];

  it("correctly sorts flowers by zone", () => {
    expect(sortFlowersByZone(flowers.slice())).toEqual([
      {
        name: "Scarlet Phlox",
        zone: 2
      },
      {
        name: "Hyacinths",
        zone: 3
      },
      {
        name: "Carnations",
        zone: 4
      },
      {
        name: "Hydrangeas",
        zone: 5
      },
      {
        name: "Pink Coneflower",
        zone: 6
      },
    ])
  })
  
  it("uses sort", () => {
    let arr = flowers.slice()
    const spy = jest.spyOn(arr, 'sort').mockImplementation();
    sortFlowersByZone(arr)
    expect(arr.sort).toHaveBeenCalled();
  })
});

describe("sortByLength", () => {
  let names = ["Scarlet Phlox", "Hyacinths", "Hydrangeas", "Pink Coneflower"]
  
  it("correctly sorts by string length", () => {
    expect(sortByLength(names.slice())).toEqual([
      'Hyacinths',
      'Hydrangeas',
      'Scarlet Phlox',
      'Pink Coneflower'
    ])
  });
  
  it("uses sort", () => {
    let arr = names.slice()
    const spy = jest.spyOn(arr, 'sort').mockImplementation();
    sortByLength(arr)
    expect(arr.sort).toHaveBeenCalled();
  });
});



