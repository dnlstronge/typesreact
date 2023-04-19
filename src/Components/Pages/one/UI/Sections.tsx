import React, { useState } from "react";
import classes from "./Sections.module.css";

/* Testing (sections.test.tsx) */

/* <Config>

(props)
title: points to title: string
content: points to content: datasource: string


*/



const Sections: React.FC<{ title: string }> = ({ title }) => {
  const [showSub, setShowSub] = useState(false);
  const showSubHandler = () => {
    setShowSub(!showSub);
  };

  /* animations (p)*/
  const mounted = showSub ? `classes.contentfoldertrans` : `classes.contentfolder`


  return (
    <section className={classes.subsection}>
      <button onClick={showSubHandler} className={classes.btn}>{title}</button>
      {showSub && (
        <div className={mounted} >
          <p className={classes.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, esse!
          </p>
        </div>
      )}
    </section>
  );
};

export default Sections;
