import { render, fireEvent, screen } from "@testing-library/react";
import ComponentToTest from "./ComponentToTest";


test("incrementCounter", () => {
    // render component
    render(<ComponentToTest />)


// get elements you want to interact with
const counter = screen.getByTestId("counter")
const plus = screen.getByTestId("plus")
const minus = screen.getByTestId("plus")

// interact
fireEvent.click(plus)
// assert expected result
expect(counter).toHaveTextContext("1")

})