/**
 * @jest-environment jsdom
 */


import { render, fireEvent, screen, } from "@testing-library/react";
import ComponentToTest from "./ComponentToTest";
import invariant from "tiny-invariant";

test("incrementCounter", () => {
  // render component
  render(<ComponentToTest />);

  const plus = screen.queryByTestId("plus")!
  const counter = screen.queryByTestId("counter")!
  //console.log(plus)
  console.log(counter)
  fireEvent.click(plus)
  //expect(plus).toHaveClass("fuck")

//   fireEvent.click(plus);
  expect(counter).not.toBeNull()
  expect(counter.textContent).toBe("1")

});
