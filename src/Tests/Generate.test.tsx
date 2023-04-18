/**
 * @jest-environment jsdom
 */

import multiply from "../Components/logic";
import { render, fireEvent, screen, } from "@testing-library/react";
import Generate from "../Components/Generate/Generate";

test("checks if element is a number", () => {
    render(<Generate/>)

    const num = screen.queryByTestId("num")!
    const clicknum = screen.queryByTestId("clicknum")!

    fireEvent.click(clicknum);
    expect(clicknum.textContent).not.toBe("0")
})

test("checks function is correct", () => {
    const testFunction = multiply(5, 5)
    expect(testFunction).toEqual(25)
})