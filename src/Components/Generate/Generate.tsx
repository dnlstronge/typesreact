/* [1] - Create component which generates a number, write tests to insure a number is generated  */
/* [2] -  Create button which changes the class of another element, write a unit test to check this*/

import React, { useState } from "react";
import classes from "./Generate.module.css";

const Generate = () => {
  const [changeClass, setChangeClass] = useState(false);
  const [generateNum, setGenerateNum] = useState(0);

  /*Dynamic style */

  const dynamic = changeClass
    ? classes.changedclass
    : classes.classtochange;

  /* handlers */

  const handleClass = () => {
    setChangeClass(!changeClass)
  };

  const handleNumber = () => {
    let rando = Math.random()*100
    setGenerateNum(
      Math.floor(rando)
    )
  };

  return (
    <div className={classes.container}>
      <section className={classes.subsection}>
        <p data-testid="num" className={classes.randonumber}>{generateNum}</p>
        <button data-testid="clicknum" onClick={handleNumber} className={classes.btn}>Generate Nunber</button>
      </section>
      <section className={classes.subsection}>
        <p data-testid="classy" className={dynamic}>color</p>
        <button data-testid="clickclassy" onClick={handleClass} className={classes.btn}>
          Change Class
        </button>
      </section>
    </div>
  );
};
export default Generate;
