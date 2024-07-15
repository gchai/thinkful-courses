import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../src/App";

describe("Test App", () => {
  test("test has button", () => {
    const { getByRole } = render(<App />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("test zero clicks", () => {
    const { queryAllByRole } = render(<App />);
    const listItems = queryAllByRole("listitem");
    expect(listItems.length).toEqual(0);
  });

  test("test one click", async () => {
    const { getByRole, queryAllByRole } = render(<App />);
    const button = getByRole("button");
    fireEvent.click(button);
    const listItems = queryAllByRole("listitem");
    expect(listItems.length).toEqual(1);
    await waitFor(() => {
      const timestamp = new Date(listItems[0].textContent).getTime();
      expect(Math.abs(timestamp - Date.now())).toBeLessThan(1000);
    });
  });

  test("test two clicks", async () => {
    const { getByRole, queryAllByRole } = render(<App />);
    const button = getByRole("button");
    fireEvent.click(button);
    const timestamp1 = Date.now();
    fireEvent.click(button);
    const listItems = queryAllByRole("listitem");
    expect(listItems.length).toEqual(2);
    await waitFor(() => {
      const timestamp2 = new Date(listItems[1].textContent).getTime();
      expect(Math.abs(timestamp1 - new Date(listItems[0].textContent).getTime())).toBeLessThan(1000);
      expect(Math.abs(timestamp2 - Date.now())).toBeLessThan(1000);
    });
  });
});