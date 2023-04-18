import { render, fireEvent, screen } from "@testing-library/react";
import ComponentToTest from "./ComponentToTest";
import invariant from "tiny-invariant";

test("incrementCounter", () => {
  // render component
  render(<ComponentToTest />);

  // get elements you want to interact with

    
  const counter = screen.queryByTestId("counter") 

  //const plus = screen.queryByTestId("plus")
 const plus = screen.queryByTestId("plus") as HTMLButtonElement
 //invariant(plus)


  // interact


 

if(plus != null) {
 fireEvent.click(plus);
  expect(counter).toHaveTextContext("1");
}
});
