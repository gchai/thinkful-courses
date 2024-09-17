import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../src/App";
import Greeting from "../src/Greeting";

describe("Test App.js", () => {
  test("renders without crashing", () => {
    render(<App />)
  });

  test("displays three greetings", () => {
    render(<App />)
    const message = screen.getAllByText(/Hello and/i)
    expect(message).toHaveLength(3)
  });
});
