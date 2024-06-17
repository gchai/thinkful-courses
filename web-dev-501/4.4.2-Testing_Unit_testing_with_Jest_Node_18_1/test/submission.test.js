const fs = require("fs");
const path = require("path");
const findLowestScoringStudent = require("../src/solution");

describe("findLowestScoringStudent()", () => {
  it("should return the student with the lowest score given a non-empty list of students", () => {
    const students = [
      { name: "Thomas Wimmer", score: 8.4 },
      { name: "Paula Pregl", score: 9.8 },
      { name: "Maja Renner", score: 7.3 },
    ];
    const actual = findLowestScoringStudent(students);
    const expected = { name: "Maja Renner", score: 7.3 };
    expect(actual).toEqual(expected);
  });

  it("should return null given an empty list of students", () => {
    const students = [];
    const actual = findLowestScoringStudent(students);
    expect(actual).toBeNull();
  });
});

const solutionTestsFilePath = path.join(__dirname, "solution.test.js");
const solutionTestContent = fs.readFileSync(solutionTestsFilePath, "utf-8");

describe("solution.test.js", () => {
  it("should use the expect syntax", () => {
    expect(solutionTestContent).toContain("expect");
  });

  it("should use the describe syntax", () => {
    expect(solutionTestContent).toContain("describe");
  });

  it("should use the toBe syntax", () => {
    expect(solutionTestContent).toContain("toBe");
  });
  
  it("should use the toEqual syntax", () => {
    expect(solutionTestContent).toContain("toEqual");
  });
});
