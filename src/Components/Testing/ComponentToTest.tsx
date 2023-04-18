//import classes from "./ComponentToTest.module.css";
import React, { ChangeEvent, useState } from "react";

/* Goal - create a component to write some unit tests for  */

/* [1] - create a simple counter component which increments/deincremnets */

const ComponentToTest = () => {
  const [counter, setCounter] = useState(0);

  /* Handlers */

  const counterHandler = (e: any) => {
    if (e.target.value === "plus") {
      setCounter((prev) => {
        return prev + 1;
      });
    } else {
      setCounter((prev) => {
        return prev - 1;
      });
    }
  };

  return (
    <div >
      <p data-testid="counter" id="counter">{counter}</p>
      <button data-testid="plus" onClick={counterHandler} className="fuck" value={"plus"} >
        +
      </button>
      <button data-testid="minus" onClick={counterHandler} value={"minus"}>
        -
      </button>
    </div>
  );
};
export default ComponentToTest;
