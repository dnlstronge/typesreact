import React, { useState } from "react";
import classes from "./ComponentOne.module.css";


const newArray: string | number[] = [25, 34, 41]

type typeState = number 

const ComponentOne = () => {
  const [showPara, setShowPara] = useState(false);
  const [sampleState, setSampleState] = useState(0)
  const variableText: string = showPara
    ? "The button has not been pressed"
    : "The button has been pressed again";

  /* handlers */

  const handlePara = () => {
    setShowPara(!showPara);
  };

  const handleNums = () => {

    /* gets rando from 0 - 2, logs index of rando from array */
    let val: number = Math.floor(Math.random()* 3)
    setSampleState(newArray[val])
  }

  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <button onClick={handlePara} className={classes.btn}>Change</button>
        <p className={classes.para}>{variableText}</p>
      </section>

      <section className={classes.section}>
        <button onClick={handleNums} className={classes.btn}>Change</button>
        <p className={classes.para}>{sampleState}</p>
      </section>
    </div>
  );
};

export default ComponentOne;
