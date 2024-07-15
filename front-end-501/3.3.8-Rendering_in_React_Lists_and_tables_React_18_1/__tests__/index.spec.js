import React from "react";
import {render, within, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Roster from "../src/Roster";


describe("Test App.jsx", () => {
  const roster = [
    { id: "1", firstName: "John", lastName: "Smith", location: "California" },
    { id: "2", firstName: "April", lastName: "White", location: "Nebraska" },
    { id: "3", firstName: "Jane", lastName: "Doe", location: "Florida" },
    { id: "7", firstName: "Dan", lastName: "Lee", location: "New Mexico" },
  ];
  const keys = ["id", "firstName", "lastName", "location"];

  
  test("Roster detailed view", () => {
  render(<Roster detailed={true} roster={roster} />);
  expect(screen.getAllByRole("table")).toHaveLength(1);

  // Check the number of rows including the header row.
  expect(screen.getAllByRole("row")).toHaveLength(roster.length + 1);

  // Check the table headers.
  const headers = screen.getAllByRole("columnheader").map(header => header.textContent);
  expect(headers).toEqual(["ID", "First Name", "Last Name", "Location"]);

  // Check the content of the first row as an example.
  const firstRowCells = screen.getAllByRole("cell").slice(0, 4).map(cell => cell.textContent);
  expect(firstRowCells).toEqual(["1", "John", "Smith", "California"]);
});
});
