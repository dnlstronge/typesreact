/**
 * @jest-environment jsdom
 */


import { render, fireEvent, screen, } from "@testing-library/react";
import ComponentToTest from "../Components/Testing/ComponentToTest";
import DataType from "../Components/Models/dataType";


test("incrementCounter", () => {
  // render component
  render(<ComponentToTest />);
 
  const plus = screen.queryByTestId("plus")!
  const counter = screen.queryByTestId("counter")!


  fireEvent.click(plus)

  expect(counter).not.toBeNull()
  expect(counter.textContent).toBe("1")



});

test("deincrementCounter", () => {
    render(<ComponentToTest/>)
    const counter = screen.queryByTestId("counter")!
    const minus = screen.queryByTestId("minus")!

    fireEvent.click(minus)
    expect(counter).not.toBeNull()
    expect(counter.textContent).toBe("-1")
})

type props = {
  addItem: (itemToAdd: string, ...data: DataType[]) => void;
  updateError: React.Dispatch<React.SetStateAction<boolean>>;}

