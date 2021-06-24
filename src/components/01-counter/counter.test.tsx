import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

test("Counter component is defined", () => {
  expect(Counter).toBeDefined();
});

test("Counter has default value 0", () => {
  render(<Counter />);
  const textElement = screen.getByLabelText(/count value/i);
  expect(textElement).toHaveTextContent("0");
});

test("Counter can increment", () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  userEvent.click(incrementButton);
  expect(screen.getByLabelText(/count value/i)).toHaveTextContent("1");
});

test("Counter can decrement", () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/decrement/i);
  userEvent.click(decrementButton);
  expect(screen.getByLabelText(/count value/i)).toHaveTextContent("-1");
});
