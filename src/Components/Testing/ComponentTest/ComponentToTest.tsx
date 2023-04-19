//import classes from "./ComponentToTest.module.css";
import React, { useState } from "react";
import classes from "./ComponentToTest.module.css"



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
    <div className={classes.container} >
      <p className={classes.counter} data-testid="counter" id="counter">{counter}</p>
      <button className={classes.btn} data-testid="plus" onClick={counterHandler}  value={"plus"} >
        +
      </button>
      <button  className={classes.btn} data-testid="minus" onClick={counterHandler} value={"minus"}>
        -
      </button>
      
    </div>

    
  );
};
export default ComponentToTest;
