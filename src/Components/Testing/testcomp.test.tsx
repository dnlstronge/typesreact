import { render, fireEvent, screen } from "@testing-library/react";
import ComponentToTest from "./ComponentToTest";

test("incrementCounter", () => {
  // render component
  render(<ComponentToTest />);

  // get elements you want to interact with

  const counter = screen.queryByTestId("counter") 

  const plus = screen.queryByTestId("plus")

  // interact

 fireEvent.click(plus);
  // assert expected result
  expect(counter).toHaveTextContext("1");

});
