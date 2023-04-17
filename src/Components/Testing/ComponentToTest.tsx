import classes from "./ComponentToTest.module.css";
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
    <div className={classes.container}>
      <p className={classes.counter}>{counter}</p>
      <button onClick={counterHandler} value={"plus"} className={classes.btn}>
        +
      </button>
      <button onClick={counterHandler} value={"minus"} className={classes.btn}>
        -
      </button>
    </div>
  );
};
export default ComponentToTest;
