import React, { useState } from "react";
import classes from "./ComponentOne.module.css";

const ComponentOne = () => {
  const [showPara, setShowPara] = useState(false);
  const variableText: string = showPara
    ? "The button has not been pressed"
    : "The button has been pressed";

  /* handlers */

  const handlePara = () => {
    setShowPara(!showPara);
  };

  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <button onClick={handlePara} className={classes.btn}></button>
        <p className={classes.para}>{variableText}</p>
      </section>
    </div>
  );
};

export default ComponentOne;
