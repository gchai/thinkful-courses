import React from "react";
import { render, within, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from "../src/App";


describe("Test App.jsx", () => {

  test("Text is centered", () => {
    render(<App />);
    const text = screen.getByText('Hello!');
    expect(text).toHaveStyle({ fontFamily: "cursive" });
  })


  test("H1 has cursive font", () => {
    render(<App />);

    const text = screen.getByText('Hello!')
    expect(text).toHaveStyle({ fontFamily: "cursive" })
  });

  test("H4 has monospace font", () => {
    render(<App />);

    const text = screen.getByText('How are you?')
    expect(text).toHaveStyle({ fontFamily: "monospace" })
  });

  test("H5 has App-weather-message classname", () => {
    const { container } = render(<App />);

    const h5 = container.getElementsByClassName("App-weather-message")
    expect(h5.length).toBe(1)
  });

  test("Is div content centered", () => {
    render(<App />);

    const div = screen.getByRole("container")

    expect(div).toHaveStyle({ textAlign: "center" })
  });
});