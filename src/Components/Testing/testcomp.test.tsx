import { render, fireEvent, screen } from "@testing-library/react";
import ComponentToTest from "./ComponentToTest";

test("incrementCounter", () => {
  // render component
  render(<ComponentToTest />);

  // get elements you want to interact with

  const counter = screen.queryByTestId("counter") 

  const plus = screen.queryByTestId("plus")


 /*
   Test passes, but suggestion is to use an invariant??? 
   implement this next.
 */


  // interact

if(plus != null) {
 fireEvent.click(plus);
 
  // assert expected result
  expect(counter).toHaveTextContext("1");
}
});
